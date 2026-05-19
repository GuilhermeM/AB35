/*
 * AB35 — Make it a gift (handwritten note & card) — Variant B
 * Target: nominalx.com cart drawer (SlideCart HQ)
 * Inject via Varify.io → Variant B → Custom JS
 * Built: 2026-05-18
 */
(function () {
  'use strict';

  if (window.__AB35_INITED__) return;
  window.__AB35_INITED__ = true;

  // ---------- CONFIG ----------
  const SECTION_ID = 'ab35-gift-section';
  const STYLE_ID = 'ab35-style';
  const NOTE_MAX = 200;
  const CARD_PROPERTY_KEY = 'Gift Note';
  const RECIPIENT_ATTR_KEY = 'Ship to recipient';

  // Verified 2026-05-18 against https://nominalx.com/products/<handle>.js
  // Fallbacks are used when /products/<handle>.js is unreachable (e.g. preview iframe).
  const CARD_FALLBACKS = [
    { handle: 'palestinian-blooms-greeting-card', id: 47270939623611, title: 'Palestinian Blooms Greeting Card', price: 350, image: 'https://cdn.shopify.com/s/files/1/2556/8900/files/CRD-PLSTNNBLMS_Front.jpg?v=1772962063' },
    { handle: 'seeds-of-gratitude-greeting-card', id: 47270928416955, title: 'Seeds of Gratitude Greeting Card', price: 350, image: 'https://cdn.shopify.com/s/files/1/2556/8900/files/CRD-SDSFGRTTD_Front.jpg?v=1772962126' },
    { handle: 'persian-rugs-greeitng-card',       id: 47270944243899, title: 'Persian Rugs Greeting Card',       price: 350, image: 'https://cdn.shopify.com/s/files/1/2556/8900/files/CRD-PRSNRGS_Front.jpg?v=1772962005' },
    { handle: 'masjid-outline-greeting-card',     id: 47270947684539, title: 'Masjid Outline Greeting Card',     price: 350, image: 'https://cdn.shopify.com/s/files/1/2556/8900/files/CRD-MSJD_Front.jpg?v=1772961949' },
    { handle: 'olive-branch-greeting-card',       id: 47270950764731, title: 'Olive Branch Greeting Card',       price: 350, image: 'https://cdn.shopify.com/s/files/1/2556/8900/files/CRD-OLVBRNCH_Front.jpg?v=1772961886' },
  ];

  // Detect whether we're running on the real nominalx.com (live) or inside a preview tool's
  // sandboxed iframe (e.g. Varify preview). When live, prefer the relative /products/<h>.js
  // endpoint to always get fresh data; in preview, skip the fetch (it'll 404 inside the iframe)
  // and use the hardcoded fallbacks.
  const IS_NOMINAL_ORIGIN = /(^|\.)nominalx\.com$/i.test(location.hostname);

  const ICON_SHIP = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-ship.svg?v=1779146588';
  const ICON_HANDWRITE = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-handwrite.svg?v=1779146589';
  const ICON_CHECK = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-check.svg?v=1779146588';
  const ICON_FREE = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-free.svg?v=1779146589';

  // ---------- STATE (lives across re-renders) ----------
  const state = {
    shipToRecipient: true, // figma default: ON
    noteToggleOpen: false,
    selectedCardId: null,
    selectedCardHandle: null,
    cardLineKey: null,
    noteText: '',
    cards: [], // resolved variants
    cardsLoaded: false,
    cardLoadFailed: false,
    viewFired: false,
    checkoutHookBound: false,
  };

  // ---------- TRACK STUB (data analyst replaces body later) ----------
  // Recommended events:
  //   ab35_view, ab35_recipient_toggle, ab35_note_toggle_on, ab35_note_toggle_off,
  //   ab35_card_selected, ab35_card_added_to_cart, ab35_note_typed, ab35_checkout_clicked
  function track(/* name, payload */) { /* noop */ }

  // ---------- UTILITIES ----------
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function formatMoney(cents) {
    if (cents == null) return '';
    const dollars = cents / 100;
    return dollars % 1 === 0 ? `$${dollars}` : `$${dollars.toFixed(2)}`;
  }

  function debounce(fn, wait) {
    let t;
    let pendingArgs = null;
    let pendingCtx = null;
    const wrapped = function (...args) {
      pendingArgs = args;
      pendingCtx = this;
      clearTimeout(t);
      t = setTimeout(() => {
        t = null;
        const a = pendingArgs; const c = pendingCtx;
        pendingArgs = null; pendingCtx = null;
        fn.apply(c, a);
      }, wait);
    };
    wrapped.pending = () => t !== null;
    wrapped.flush = () => {
      if (t === null) return;
      clearTimeout(t);
      t = null;
      const a = pendingArgs; const c = pendingCtx;
      pendingArgs = null; pendingCtx = null;
      fn.apply(c, a);
    };
    return wrapped;
  }

  function safeFetchJson(url, opts) {
    return fetch(url, opts).then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
      return r.json();
    });
  }

  function postJson(url, payload) {
    return safeFetchJson(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
  }

  // Lightweight diagnostics — visible in DevTools, easy to grep, easy to remove later.
  const LOG = (...args) => { try { console.info('[AB35]', ...args); } catch (e) {} };
  const WARN = (...args) => { try { console.warn('[AB35]', ...args); } catch (e) {} };

  function dispatchCartRefresh() {
    try { document.dispatchEvent(new CustomEvent('cart:refresh')); } catch (e) {}
    try { window.dispatchEvent(new Event('cart:updated')); } catch (e) {}
    try { document.dispatchEvent(new Event('cart:build')); } catch (e) {}
    try {
      if (window.SlideCart && typeof window.SlideCart.refresh === 'function') {
        window.SlideCart.refresh();
      }
    } catch (e) {}
  }

  // ---------- STYLES ----------
  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const css = `
#${SECTION_ID} {
  font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #000;
  padding: 16px;
  border-top: 1px solid rgba(0,0,0,0.1);
  background: #fff;
  box-sizing: border-box;
}
#${SECTION_ID} *, #${SECTION_ID} *::before, #${SECTION_ID} *::after { box-sizing: border-box; }
#${SECTION_ID} .ab35-title {
  font-size: 13.6px;
  line-height: 17px;
  font-weight: 600;
  color: #000;
  margin: 0 0 16px 0;
}
#${SECTION_ID} .ab35-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
#${SECTION_ID} .ab35-row + .ab35-row { padding-top: 16px; }
#${SECTION_ID} .ab35-row-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}
#${SECTION_ID} .ab35-icon {
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#${SECTION_ID} .ab35-icon img { display: block; width: 32px; height: 32px; }
#${SECTION_ID} .ab35-row-text { min-width: 0; }
#${SECTION_ID} .ab35-row-title {
  font-size: 13.6px;
  line-height: 17px;
  font-weight: 600;
  color: #000;
  margin: 0;
}
#${SECTION_ID} .ab35-row-sub {
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  color: #616161;
  margin: 2px 0 0 0;
}
#${SECTION_ID} .ab35-row-sub.ab35-row-sub--bold { font-weight: 600; }

/* Toggle pill */
#${SECTION_ID} .ab35-toggle {
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 32px;
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;
  padding: 0;
  flex: 0 0 48px;
  transition: background-color 150ms ease, border-color 150ms ease;
  outline: none;
}
#${SECTION_ID} .ab35-toggle-thumb {
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #CFCFCF;
  transition: left 160ms ease, background-color 160ms ease;
}
#${SECTION_ID} .ab35-toggle[aria-checked="true"] {
  background: #468036;
  border-color: #468036;
}
#${SECTION_ID} .ab35-toggle[aria-checked="true"] .ab35-toggle-thumb {
  left: calc(100% - 22px);
  background: #FFFFFF;
}
#${SECTION_ID} .ab35-toggle:focus-visible { box-shadow: 0 0 0 2px rgba(70,128,54,0.35); }

/* Expanded area */
#${SECTION_ID} .ab35-expand {
  display: block;
  padding-top: 16px;
}
#${SECTION_ID} .ab35-expand[hidden] { display: none; }

#${SECTION_ID} .ab35-cards-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 12px;
  margin-bottom: 12px;
}
#${SECTION_ID} .ab35-cards-scroll::-webkit-scrollbar { height: 4px; }
#${SECTION_ID} .ab35-cards-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }

#${SECTION_ID} .ab35-card {
  flex: 0 0 auto;
  width: 80px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
  scroll-snap-align: start;
  font-family: inherit;
}
#${SECTION_ID} .ab35-card:focus-visible .ab35-card-thumb { box-shadow: 0 0 0 2px rgba(70,128,54,0.35); }

#${SECTION_ID} .ab35-card-thumb {
  position: relative;
  width: 80px;
  height: 107px;
  border-radius: 3px;
  background-color: #f4f4f4;
  border: 1.5px solid transparent;
  transition: border-color 150ms ease;
  overflow: hidden;
}
#${SECTION_ID} .ab35-card-thumb-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity 200ms ease;
}
#${SECTION_ID} .ab35-card-thumb.is-loaded .ab35-card-thumb-img {
  opacity: 1;
}
#${SECTION_ID} .ab35-card-thumb::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.04) 0%,
    rgba(0,0,0,0.08) 50%,
    rgba(0,0,0,0.04) 100%
  );
  background-size: 200% 100%;
  animation: ab35-shimmer 1.2s ease-in-out infinite;
  opacity: 1;
  transition: opacity 200ms ease;
  pointer-events: none;
}
#${SECTION_ID} .ab35-card-thumb.is-loaded::before {
  opacity: 0;
}
@keyframes ab35-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Skeleton cards shown before /products/<h>.js resolves */
#${SECTION_ID} .ab35-card-skeleton {
  flex: 0 0 auto;
  width: 80px;
  scroll-snap-align: start;
}
#${SECTION_ID} .ab35-card-skeleton .ab35-skeleton-thumb {
  width: 80px;
  height: 107px;
  border-radius: 3px;
  background: #f4f4f4;
  position: relative;
  overflow: hidden;
}
#${SECTION_ID} .ab35-card-skeleton .ab35-skeleton-thumb::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.04) 0%,
    rgba(0,0,0,0.08) 50%,
    rgba(0,0,0,0.04) 100%
  );
  background-size: 200% 100%;
  animation: ab35-shimmer 1.2s ease-in-out infinite;
}
#${SECTION_ID} .ab35-card-skeleton .ab35-skeleton-line {
  height: 9px;
  border-radius: 2px;
  background: #f4f4f4;
  margin-top: 8px;
  position: relative;
  overflow: hidden;
}
#${SECTION_ID} .ab35-card-skeleton .ab35-skeleton-line.short { width: 60%; margin-top: 4px; }
#${SECTION_ID} .ab35-card-skeleton .ab35-skeleton-line::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.04) 0%,
    rgba(0,0,0,0.08) 50%,
    rgba(0,0,0,0.04) 100%
  );
  background-size: 200% 100%;
  animation: ab35-shimmer 1.2s ease-in-out infinite;
}
#${SECTION_ID} .ab35-card[aria-checked="true"] .ab35-card-thumb {
  border-color: #468036;
}
#${SECTION_ID} .ab35-free-pill {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 34px;
  height: 15px;
  background: #2C872C;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  line-height: 1;
}
#${SECTION_ID} .ab35-check-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #2C872C;
  display: none;
  align-items: center;
  justify-content: center;
}
#${SECTION_ID} .ab35-card[aria-checked="true"] .ab35-check-badge { display: flex; }
#${SECTION_ID} .ab35-check-badge img { width: 14px; height: 14px; display: block; }

#${SECTION_ID} .ab35-card-title {
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #000;
  margin-top: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
#${SECTION_ID} .ab35-card-price {
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #616161;
  margin-top: 2px;
}

/* Textarea */
#${SECTION_ID} .ab35-textarea-wrap { position: relative; }
#${SECTION_ID} .ab35-textarea {
  display: block;
  width: 100%;
  min-height: 64px;
  padding: 8px 12px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 0;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
  background: #fff;
  resize: vertical;
  outline: none;
}
#${SECTION_ID} .ab35-textarea::placeholder {
  color: rgba(0,0,0,0.6);
  font-size: 14px;
  line-height: 1.4;
}
#${SECTION_ID} .ab35-textarea:focus { border-color: rgba(0,0,0,0.3); }
#${SECTION_ID} .ab35-counter {
  font-size: 12px;
  line-height: 1.4;
  color: rgba(0,0,0,0.6);
  text-align: right;
  margin-top: 6px;
}

/* Loading / empty */
#${SECTION_ID} .ab35-loading {
  font-size: 12px;
  color: rgba(0,0,0,0.6);
  padding: 12px 0;
}

@media (max-width: 600px) {
  #${SECTION_ID} { padding: 14px; }
  #${SECTION_ID} .ab35-cards-scroll { gap: 8px; }
  #${SECTION_ID} .ab35-row { gap: 8px; }
}
    `;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ---------- DOM BUILDERS ----------
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else if (k === 'style' && typeof attrs[k] === 'object') Object.assign(node.style, attrs[k]);
        else if (k in node && typeof node[k] !== 'object') node[k] = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function buildToggle(name, checked) {
    const btn = el('button', {
      type: 'button',
      class: 'ab35-toggle',
      role: 'switch',
      'aria-checked': checked ? 'true' : 'false',
      'data-ab35-toggle': name,
      'aria-label': name === 'recipient' ? 'Ship directly to the recipient' : 'Add a handwritten note and card',
    }, [el('span', { class: 'ab35-toggle-thumb' })]);
    return btn;
  }

  function buildCardNode(card) {
    const isSelected = state.selectedCardId === card.id;
    const thumb = el('div', { class: 'ab35-card-thumb' });

    if (card.image) {
      const img = el('img', {
        class: 'ab35-card-thumb-img',
        alt: card.title || '',
        loading: 'lazy',
        decoding: 'async',
      });
      // Reveal thumb (fade image in, hide shimmer) only once the image has decoded.
      const reveal = () => thumb.classList.add('is-loaded');
      img.addEventListener('load', reveal, { once: true });
      img.addEventListener('error', reveal, { once: true }); // hide shimmer even on error
      img.src = card.image;
      if (img.complete && img.naturalWidth > 0) reveal(); // cached case
      thumb.appendChild(img);
    } else {
      thumb.classList.add('is-loaded'); // nothing to load
    }

    if (card.isFree) {
      thumb.appendChild(el('span', { class: 'ab35-free-pill', text: 'FREE' }));
    }
    thumb.appendChild(el('span', { class: 'ab35-check-badge' }, [
      el('img', { src: ICON_CHECK, alt: '' }),
    ]));

    const btn = el('button', {
      type: 'button',
      class: 'ab35-card',
      role: 'radio',
      'aria-checked': isSelected ? 'true' : 'false',
      'data-card-id': String(card.id),
      'data-card-handle': card.handle,
    }, [
      thumb,
      el('div', { class: 'ab35-card-title', text: card.title }),
      el('div', { class: 'ab35-card-price', text: card.isFree ? 'Free' : formatMoney(card.price) }),
    ]);
    return btn;
  }

  function buildSkeletonCard() {
    return el('div', { class: 'ab35-card-skeleton', 'aria-hidden': 'true' }, [
      el('div', { class: 'ab35-skeleton-thumb' }),
      el('div', { class: 'ab35-skeleton-line' }),
      el('div', { class: 'ab35-skeleton-line short' }),
    ]);
  }

  function fillSkeletons(wrap, count) {
    for (let i = 0; i < count; i++) wrap.appendChild(buildSkeletonCard());
  }

  function buildSection() {
    const section = el('div', { id: SECTION_ID, 'data-ab35': '' });

    section.appendChild(el('div', { class: 'ab35-title', text: 'Make it a gift:' }));

    // Row 1 — recipient
    const recipientRow = el('div', { class: 'ab35-row', 'data-ab35-row': 'recipient' }, [
      el('div', { class: 'ab35-row-left' }, [
        el('div', { class: 'ab35-icon' }, [el('img', { src: ICON_SHIP, alt: '' })]),
        el('div', { class: 'ab35-row-text' }, [
          el('div', { class: 'ab35-row-title', text: 'Ship directly to the recipient' }),
          el('div', { class: 'ab35-row-sub', text: 'No receipt or prices on the packing slip' }),
        ]),
      ]),
      buildToggle('recipient', state.shipToRecipient),
    ]);
    section.appendChild(recipientRow);

    // Row 2 — note
    const noteRow = el('div', { class: 'ab35-row', 'data-ab35-row': 'note' }, [
      el('div', { class: 'ab35-row-left' }, [
        el('div', { class: 'ab35-icon' }, [el('img', { src: ICON_HANDWRITE, alt: '' })]),
        el('div', { class: 'ab35-row-text' }, [
          el('div', { class: 'ab35-row-title', text: 'Add a handwritten note & card' }),
          el('div', { class: 'ab35-row-sub ab35-row-sub--bold', text: 'From +$1.99' }),
        ]),
      ]),
      buildToggle('note', state.noteToggleOpen),
    ]);
    section.appendChild(noteRow);

    // Expanded area
    const expand = el('div', { class: 'ab35-expand' });
    if (!state.noteToggleOpen) expand.setAttribute('hidden', '');

    const cardsWrap = el('div', { class: 'ab35-cards-scroll', role: 'radiogroup', 'aria-label': 'Choose a greeting card' });

    if (!state.cardsLoaded) {
      fillSkeletons(cardsWrap, CARD_FALLBACKS.length);
    } else if (state.cards.length === 0) {
      cardsWrap.appendChild(el('div', { class: 'ab35-loading', text: 'Cards unavailable right now.' }));
    } else {
      state.cards.forEach((c) => cardsWrap.appendChild(buildCardNode(c)));
    }
    expand.appendChild(cardsWrap);

    const textarea = el('textarea', {
      class: 'ab35-textarea',
      maxlength: NOTE_MAX,
      placeholder: 'Write your message… we’ll hand-letter it inside.',
    });
    textarea.value = state.noteText || '';
    const counter = el('div', { class: 'ab35-counter', text: `${(state.noteText || '').length}/${NOTE_MAX}` });
    expand.appendChild(el('div', { class: 'ab35-textarea-wrap' }, [textarea, counter]));

    section.appendChild(expand);

    // If load failed entirely, hide the note row + expand (nothing to sell).
    if (state.cardLoadFailed) {
      noteRow.style.display = 'none';
      expand.style.display = 'none';
    }

    bindHandlers(section);
    return section;
  }

  // ---------- HANDLERS ----------
  function bindHandlers(section) {
    // Recipient toggle
    const recipientToggle = $('.ab35-toggle[data-ab35-toggle="recipient"]', section);
    recipientToggle.addEventListener('click', onRecipientToggle);

    // Note toggle
    const noteToggle = $('.ab35-toggle[data-ab35-toggle="note"]', section);
    noteToggle.addEventListener('click', onNoteToggle);

    // Card buttons
    $$('.ab35-card', section).forEach((btn) => {
      btn.addEventListener('click', () => onCardClick(btn));
    });

    // Textarea
    const textarea = $('.ab35-textarea', section);
    if (textarea) {
      textarea.addEventListener('input', onNoteInput);
    }
  }

  function onRecipientToggle() {
    state.shipToRecipient = !state.shipToRecipient;
    paintRecipientToggle();
    track('ab35_recipient_toggle', { on: state.shipToRecipient });
    postJson('/cart/update.js', {
      attributes: { [RECIPIENT_ATTR_KEY]: state.shipToRecipient ? 'Yes' : 'No' },
    }).catch(() => { /* swallow — non-blocking */ });
  }

  function onNoteToggle() {
    state.noteToggleOpen = !state.noteToggleOpen;
    paintNoteToggle();

    if (state.noteToggleOpen) {
      track('ab35_note_toggle_on', {});
      // Lazy-load cards on first open if not already.
      if (!state.cardsLoaded) {
        loadCards().then(() => rerenderCardsArea());
      }
    } else {
      const hadCard = !!state.cardLineKey;
      const hadText = !!(state.noteText && state.noteText.length);
      track('ab35_note_toggle_off', { had_card: hadCard, had_text: hadText });
      LOG('note toggle OFF — hadCard:', hadCard, 'hadText:', hadText);
      // Only sweep if a card was actually added in this session. Avoids touching the cart
      // (and triggering re-renders that wipe our section) when there's nothing to clean.
      if (hadCard) {
        state.cardLineKey = null;
        enqueueCardWrite(() => removeAllCardLines().then(() => dispatchCartRefresh()));
      }
      state.selectedCardId = null;
      state.selectedCardHandle = null;
      state.noteText = '';
      const ta = $(`#${SECTION_ID} .ab35-textarea`);
      if (ta) ta.value = '';
      const counter = $(`#${SECTION_ID} .ab35-counter`);
      if (counter) counter.textContent = `0/${NOTE_MAX}`;
      paintSelectedCard();
    }
  }

  // Variant IDs of every greeting card we sell — used to sweep stale lines from prior clicks.
  const CARD_VARIANT_IDS = new Set(CARD_FALLBACKS.map((c) => c.id));

  // Serialize card-click writes so two rapid taps cannot race and double-add.
  let cardWriteQueue = Promise.resolve();

  function removeAllCardLines() {
    return fetch('/cart.js')
      .then((r) => r.json())
      .then((cart) => {
        const cardLines = (cart.items || []).filter((i) => CARD_VARIANT_IDS.has(i.variant_id));
        LOG('removeAllCardLines — found', cardLines.length, 'card lines to remove');
        // Sequential remove — Shopify rejects parallel /cart/change.js with line-index drift.
        return cardLines.reduce((p, line) => {
          return p.then(() => postJson('/cart/change.js', { id: line.key, quantity: 0 }).catch((e) => {
            WARN('failed to remove line', line.key, e);
            return null;
          }));
        }, Promise.resolve());
      })
      .catch((e) => { WARN('removeAllCardLines fetch failed', e); return null; });
  }

  function onCardClick(btn) {
    const variantId = parseInt(btn.getAttribute('data-card-id'), 10);
    const handle = btn.getAttribute('data-card-handle');
    if (!variantId || variantId === state.selectedCardId) return;

    const card = state.cards.find((c) => c.id === variantId);
    if (!card) {
      WARN('onCardClick: card not found for variantId', variantId);
      return;
    }

    LOG('card click — variantId:', variantId, 'title:', card.title);

    track('ab35_card_selected', {
      variant_id: variantId,
      title: card.title,
      price_cents: card.price,
      is_free: !!card.isFree,
    });

    // Optimistic UI: paint selected.
    const previousId = state.selectedCardId;
    const previousKey = state.cardLineKey;
    state.selectedCardId = variantId;
    state.selectedCardHandle = handle;
    state.cardLineKey = null; // will be repopulated after add succeeds
    paintSelectedCard();

    // Queue the write so concurrent clicks resolve in order; always sweep every known
    // greeting-card variant first so only the latest selection survives.
    enqueueCardWrite(() => {
      LOG('sweeping existing card lines before add');
      return removeAllCardLines()
        .then(() => {
          LOG('POST /cart/add.js id=' + variantId);
          return postJson('/cart/add.js', {
            items: [{
              id: variantId,
              quantity: 1,
              properties: { [CARD_PROPERTY_KEY]: state.noteText || '' },
            }],
          });
        })
        .then((res) => {
          LOG('add.js response', res);
          if (state.selectedCardId !== variantId) {
            LOG('stale add — user picked a different card; not adopting');
            return;
          }
          const item = (res && res.items && res.items[0]) || res;
          if (item && item.key) {
            state.cardLineKey = item.key;
            LOG('card added — line key:', item.key);
            track('ab35_card_added_to_cart', { variant_id: variantId, line_item_key: item.key });
          } else {
            LOG('add.js response missing key — falling back to /cart.js lookup');
            return fetch('/cart.js').then((r) => r.json()).then((cart) => {
              if (state.selectedCardId !== variantId) return;
              const found = (cart.items || []).find((i) => i.variant_id === variantId);
              if (found) {
                state.cardLineKey = found.key;
                LOG('card found in /cart.js — line key:', found.key);
                track('ab35_card_added_to_cart', { variant_id: variantId, line_item_key: found.key });
              } else {
                WARN('/cart.js shows no card line after successful add');
              }
            });
          }
        })
        .then(() => dispatchCartRefresh())
        .catch((err) => {
          WARN('card add failed', err);
          if (state.selectedCardId === variantId) {
            state.selectedCardId = previousId;
            state.cardLineKey = previousKey;
            paintSelectedCard();
          }
        });
    });
  }

  const debouncedNotePersist = debounce(() => {
    track('ab35_note_typed', { length: state.noteText.length });
    if (!state.cardLineKey) return;
    // Route through the same write queue so the checkout hook can drain it.
    enqueueCardWrite(() => postJson('/cart/change.js', {
      id: state.cardLineKey,
      quantity: 1,
      properties: { [CARD_PROPERTY_KEY]: state.noteText },
    }).then(() => dispatchCartRefresh()).catch((e) => WARN('note persist failed', e)));
  }, 600);

  function debouncedNotePersistPending() { return debouncedNotePersist.pending(); }
  function flushDebouncedNotePersist() { debouncedNotePersist.flush(); }

  function onNoteInput(e) {
    const value = e.target.value.slice(0, NOTE_MAX);
    state.noteText = value;
    const counter = $(`#${SECTION_ID} .ab35-counter`);
    if (counter) counter.textContent = `${value.length}/${NOTE_MAX}`;
    debouncedNotePersist();
  }

  function removeCardLine() {
    if (!state.cardLineKey) return Promise.resolve();
    const key = state.cardLineKey;
    state.cardLineKey = null;
    return postJson('/cart/change.js', { id: key, quantity: 0 })
      .then(() => dispatchCartRefresh());
  }

  // ---------- PAINTERS ----------
  function paintRecipientToggle() {
    const btn = $(`#${SECTION_ID} .ab35-toggle[data-ab35-toggle="recipient"]`);
    if (btn) btn.setAttribute('aria-checked', state.shipToRecipient ? 'true' : 'false');
  }
  function paintNoteToggle() {
    const btn = $(`#${SECTION_ID} .ab35-toggle[data-ab35-toggle="note"]`);
    if (btn) btn.setAttribute('aria-checked', state.noteToggleOpen ? 'true' : 'false');
    const expand = $(`#${SECTION_ID} .ab35-expand`);
    if (expand) {
      if (state.noteToggleOpen) expand.removeAttribute('hidden');
      else expand.setAttribute('hidden', '');
    }
  }
  function paintSelectedCard() {
    $$(`#${SECTION_ID} .ab35-card`).forEach((b) => {
      const id = parseInt(b.getAttribute('data-card-id'), 10);
      b.setAttribute('aria-checked', id === state.selectedCardId ? 'true' : 'false');
    });
  }
  function rerenderCardsArea() {
    const wrap = $(`#${SECTION_ID} .ab35-cards-scroll`);
    if (!wrap) return;
    wrap.innerHTML = '';
    if (state.cards.length === 0) {
      wrap.appendChild(el('div', { class: 'ab35-loading', text: 'Cards unavailable right now.' }));
      return;
    }
    state.cards.forEach((c) => {
      const node = buildCardNode(c);
      node.addEventListener('click', () => onCardClick(node));
      wrap.appendChild(node);
    });
  }

  // ---------- CARD LOADING ----------
  function normalizeImg(src) {
    if (!src) return null;
    return src.startsWith('//') ? `https:${src}` : src;
  }

  function fallbackCard(fb) {
    return {
      id: fb.id,
      handle: fb.handle,
      title: fb.title,
      price: fb.price,
      image: normalizeImg(fb.image),
      isFree: fb.price === 0,
    };
  }

  let loadCardsPromise = null;
  function loadCards() {
    if (loadCardsPromise) return loadCardsPromise;

    // Outside the real nominalx origin (e.g. Varify preview iframe), /products/<h>.js is
    // unreachable. Skip the fetch and use the verified fallback list directly.
    if (!IS_NOMINAL_ORIGIN) {
      state.cards = CARD_FALLBACKS.map(fallbackCard);
      state.cardsLoaded = true;
      state.cardLoadFailed = false;
      loadCardsPromise = Promise.resolve(state.cards);
      return loadCardsPromise;
    }

    loadCardsPromise = Promise.all(CARD_FALLBACKS.map((fb) => {
      return fetch(`/products/${fb.handle}.js`, { credentials: 'same-origin' })
        .then((r) => r.ok ? r.json() : null)
        .then((p) => {
          if (!p) return fallbackCard(fb);
          const v = (p.variants && p.variants[0]) || null;
          if (!v) return fallbackCard(fb);
          return {
            id: v.id,
            handle: p.handle || fb.handle,
            title: p.title || fb.title,
            price: v.price,
            image: normalizeImg(p.featured_image || (p.images && p.images[0])) || normalizeImg(fb.image),
            isFree: v.price === 0,
          };
        })
        .catch(() => fallbackCard(fb));
    })).then((arr) => {
      state.cards = arr.filter(Boolean);
      state.cardsLoaded = true;
      state.cardLoadFailed = state.cards.length === 0;
      return state.cards;
    });
    return loadCardsPromise;
  }

  // ---------- CART STATE CHECK ----------
  let cartSnapshotPromise = null;
  function refreshCartSnapshot() {
    cartSnapshotPromise = fetch('/cart.js').then((r) => r.json()).then((cart) => {
      // If the line we believed we owned is gone (user removed it manually), clear state.
      if (state.cardLineKey) {
        const stillThere = (cart.items || []).some((i) => i.key === state.cardLineKey);
        if (!stillThere) {
          state.cardLineKey = null;
          state.selectedCardId = null;
          state.selectedCardHandle = null;
        }
      }
      // Sync recipient flag from cart attributes (in case it was set previously this session).
      const attr = cart.attributes && cart.attributes[RECIPIENT_ATTR_KEY];
      if (attr === 'Yes') state.shipToRecipient = true;
      else if (attr === 'No') state.shipToRecipient = false;
      return cart;
    }).catch(() => null);
    return cartSnapshotPromise;
  }

  function isCartEmpty() {
    const itemsRoot = document.querySelector('.slidecarthq .items');
    if (!itemsRoot) return false;
    return itemsRoot.querySelectorAll('.item').length === 0;
  }

  // ---------- VIEW TRACKING ----------
  let viewObserver = null;
  function attachViewObserver(node) {
    if (state.viewFired || !('IntersectionObserver' in window)) return;
    viewObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !state.viewFired) {
          state.viewFired = true;
          track('ab35_view', {});
          viewObserver.disconnect();
        }
      });
    }, { threshold: 0.25 });
    viewObserver.observe(node);
  }

  // ---------- CHECKOUT HOOK ----------
  // pendingWrites tracks in-flight cart-write tasks so the checkout hook can defer
  // navigation until /cart/add.js (etc.) actually commits to Shopify.
  let pendingWrites = 0;
  function enqueueCardWrite(taskFn) {
    pendingWrites++;
    cardWriteQueue = cardWriteQueue
      .then(taskFn)
      .catch((e) => WARN('card write task rejected', e))
      .finally(() => { pendingWrites--; });
    return cardWriteQueue;
  }

  function attachCheckoutHook() {
    if (state.checkoutHookBound) return;

    // Capture-phase listener on the document so we run before SlideCart's own submit handler.
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!target || !target.closest) return;
      const btn = target.closest('#slidecart-checkout-form .button.full, #slidecart-checkout-form [name="checkout"]');
      if (!btn) return;

      track('ab35_checkout_clicked', {
        recipient: state.shipToRecipient,
        card_id: state.selectedCardId,
        note_length: (state.noteText || '').length,
      });

      // If there are pending cart writes (card add/swap/remove or note property update),
      // block the checkout until they settle. Otherwise the browser navigates to /checkout
      // before /cart/add.js has been committed and the card is lost.
      const queueBusy = pendingWrites > 0 || debouncedNotePersistPending();
      if (!queueBusy) return;

      LOG('checkout clicked while writes pending — deferring submit');
      e.preventDefault();
      e.stopPropagation();

      // Visual lock so the user doesn't keep tapping.
      btn.setAttribute('disabled', '');
      const originalLabel = btn.textContent;
      btn.textContent = '🔒 One sec…';

      // Flush any pending debounced note save immediately so it joins the queue.
      flushDebouncedNotePersist();

      // Wait for the queue to drain (or timeout) then re-click programmatically.
      const TIMEOUT = 4000;
      let timedOut = false;
      const timer = setTimeout(() => { timedOut = true; resume(); }, TIMEOUT);

      function resume() {
        clearTimeout(timer);
        btn.removeAttribute('disabled');
        btn.textContent = originalLabel;
        if (timedOut) WARN('checkout deferral timed out — proceeding anyway');
        // Programmatic re-click. Our handler will see pendingWrites===0 this time and pass through.
        btn.click();
      }

      // Drain: wait until queue settles AND pendingWrites returns to 0.
      cardWriteQueue.finally(() => {
        if (pendingWrites === 0) resume();
        // If new writes snuck in (unlikely — UI is disabled), loop once more.
        else cardWriteQueue.finally(resume);
      });
    }, true);
    state.checkoutHookBound = true;
  }

  // ---------- MOUNT ----------
  function ensureMounted() {
    if (document.getElementById(SECTION_ID)) return;
    const upsells = document.querySelector('.slidecarthq .upsells');
    if (!upsells || !upsells.parentNode) return;

    injectStyles();

    if (isCartEmpty()) return; // don't render when there are no items

    const section = buildSection();
    upsells.parentNode.insertBefore(section, upsells.nextSibling);

    // Refresh cart snapshot to sync state (does not block render).
    refreshCartSnapshot().then(() => {
      // Re-apply visuals in case attributes/line state changed.
      paintRecipientToggle();
      paintSelectedCard();
    });

    // Kick off card load on first mount so the strip is ready when user toggles the note row.
    // In preview environments this resolves synchronously from fallbacks; on the live store
    // it does one round-trip to /products/<h>.js per card.
    if (!state.cardsLoaded) {
      loadCards().then(() => rerenderCardsArea());
    } else {
      rerenderCardsArea();
    }

    attachViewObserver(section);
    attachCheckoutHook();
  }

  // ---------- BOOT ----------
  function boot() {
    injectStyles();

    // 1) Poll until SlideCart renders for the first time.
    const initInterval = setInterval(() => {
      if (document.querySelector('.slidecarthq .upsells')) {
        clearInterval(initInterval);
        ensureMounted();
      }
    }, 200);
    setTimeout(() => clearInterval(initInterval), 15000);

    // 2) Watch the document for cart re-renders / drawer remounts.
    const observer = new MutationObserver(() => {
      const upsells = document.querySelector('.slidecarthq .upsells');
      const present = document.getElementById(SECTION_ID);
      if (upsells && !present) ensureMounted();
      else if (present && isCartEmpty()) present.style.display = 'none';
      else if (present && !isCartEmpty()) present.style.display = '';
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
