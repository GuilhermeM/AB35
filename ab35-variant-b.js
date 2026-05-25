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

  // Cart attribute key read by Shopify Flow ("Tag orders with gift card handwritten note").
  // Values: 'blank' (no handwriting) | 'write' (handwriting service selected).
  // Flow rule: if attributes[gift_card_mode] === 'write' → tag order 'gift-handwritten'.
  const GIFT_MODE_ATTR_KEY = 'gift_card_mode';

  // Handwriting fee product — created in Shopify Admin, awaiting client approval before enabling.
  // To enable: set HANDWRITING_FEE_ENABLED = true AND fill in the variant ID + handle below.
  // When disabled, the seg control still works visually + writes the cart attribute, but no
  // line item is added (the +$1.99 charge won't actually post).
  const HANDWRITING_FEE_ENABLED = false;
  const HANDWRITING_FEE_VARIANT_ID = null; // e.g. 47270000000000
  const HANDWRITING_FEE_HANDLE = null;     // e.g. 'handwriting-fee'
  const HANDWRITING_FEE_PRICE_CENTS = 199;

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

  // Hosted Shopify CDN icons (uploaded per spec §0). Each file includes its own
  // 32x32 tinted circle background + stroke in #54684E, so the container in CSS
  // is just a positioning frame with no extra background.
  const ICON_SHIP_URL = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-ship.svg?v=1779146588';
  const ICON_CARD_URL = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-handwrite.svg?v=1779146589';
  const ICON_CHECK = 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-check.svg?v=1779146588';

  // ---------- STATE (lives across re-renders) ----------
  const state = {
    shipToRecipient: true, // figma default: ON
    noteToggleOpen: false,
    selectedCardId: null,
    selectedCardHandle: null,
    cardLineKey: null,
    noteText: '',
    // Handwriting mode: 'blank' (default, free) | 'write' (+$1.99, handwriting service).
    // Set to 'blank' when the card toggle flips ON. Persists in JS state across re-renders;
    // textarea text is preserved when switching modes so users don't lose their draft.
    handwriteMode: 'blank',
    feeLineKey: null, // line item key for the $1.99 handwriting fee, when added
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
/* Note: prior versions hid .slidecarthq .upsells (Grab Gifts) for Variant B. Client
   later requested keeping Grab Gifts visible. The IIFE no longer touches it. */

/* Hide the cart's "Discounts" footer row for Variant B — client wants the section
   to occupy less vertical space. The subtotal still reflects the discount amount;
   only the explicit "Discounts -$XX" line is hidden.
   Markup varies — auto-discount uses .amp-sc__footer-row--discount on the outer
   .footer-row; coupon-applied uses it on an inner span. We hide both the marker
   itself AND the sibling .slidecart-discount-amount, then collapse the parent
   .footer-row to zero height so no residual line/padding shows. :has() handles
   the parent collapse where supported; the explicit child selectors are the
   fallback that always works. */
.slidecarthq .footer .footer-row.amp-sc__footer-row--discount,
.slidecarthq .footer .amp-sc__footer-row--discount,
.slidecarthq .footer .footer-row:has(.amp-sc__footer-row--discount),
.slidecarthq .footer .footer-row:has(.slidecart-discount-amount) {
  display: none !important;
}
/* Safety belt: if the parent .footer-row survived due to no :has() support,
   neutralize its leftover height/padding/border and zero its visible children. */
.slidecarthq .footer .footer-row .amp-sc__footer-row--discount,
.slidecarthq .footer .footer-row .slidecart-discount-amount {
  display: none !important;
}
/* The footer itself reserves padding/gap for two rows; with the discount row
   gone, the top padding leaves a visible empty band above the subtotal. Tighten
   the footer's own spacing. */
.slidecarthq footer.footer.new-footer,
.slidecarthq .footer.new-footer {
  padding-top: 0 !important;
  gap: 0 !important;
}
/* Neutralize any theme-default borders that the SlideCart skin paints on
   footer rows or on the rewards/promo block above subtotal — those are what
   produced doubled lines and the inset (non-full-bleed) divider. */
.slidecarthq footer.footer .footer-row,
.slidecarthq footer.footer .footer-row.amp-sc__footer-row--subtotal,
.slidecarthq footer.footer .amp-sc__rewards,
.slidecarthq footer.footer .slidecart-rewards,
.slidecarthq footer.footer .footer-row + .footer-row {
  border-top: 0 !important;
  border-bottom: 0 !important;
}
/* Draw exactly one full-bleed divider directly above the subtotal row.
   The footer has 30px horizontal padding, so we use a ::before with negative
   horizontal positioning to span edge-to-edge of the drawer. */
.slidecarthq footer.footer .footer-row.amp-sc__footer-row--subtotal {
  position: relative;
  padding-top: 12px;
}
.slidecarthq footer.footer .footer-row.amp-sc__footer-row--subtotal::before {
  content: "";
  position: absolute;
  top: 0;
  left: -30px;
  right: -30px;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

/* Section root — matches figma cart footer background #F2F2F2 + 16px / 20px padding. */
#${SECTION_ID} {
  font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #000;
  padding: 16px 20px;
  background: #F2F2F2;
  box-sizing: border-box;
}
#${SECTION_ID} *, #${SECTION_ID} *::before, #${SECTION_ID} *::after { box-sizing: border-box; }
/* Force Instrument Sans on every text element inside our section — the live theme
   has higher-specificity rules on .slidecarthq descendants that can otherwise win. */
#${SECTION_ID},
#${SECTION_ID} div,
#${SECTION_ID} span,
#${SECTION_ID} button,
#${SECTION_ID} input,
#${SECTION_ID} textarea,
#${SECTION_ID} p {
  font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
/* "Make it a gift:" — figma: 13.6px / 17px / 600, color #000, Title Case with colon. */
#${SECTION_ID} .ab35-title {
  font-size: 13.6px;
  line-height: 17px;
  font-weight: 600;
  color: #000;
  margin: 0 0 12px 0;
}
/* Rows — figma uses gap 12px between rows + bottom border on the wrapping frame. */
#${SECTION_ID} .ab35-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}
#${SECTION_ID} .ab35-row + .ab35-row { border-top: 1px solid rgba(0,0,0,0.08); }
/* Icon container — the hosted SVGs already include the 32x32 tinted circle background
   and #54684E stroke, so the container here is just a 32x32 box. */
#${SECTION_ID} .ab35-icon {
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#${SECTION_ID} .ab35-icon img {
  display: block;
  width: 32px;
  height: 32px;
}
#${SECTION_ID} .ab35-row-text {
  flex: 1;
  min-width: 0;
}
/* Row title — figma: 13.6px / 17px / 600 / #000. */
#${SECTION_ID} .ab35-row-title {
  font-size: 13.6px;
  line-height: 17px;
  font-weight: 600;
  color: #000;
  margin: 0;
}
/* "from Free" label — figma: 12px / 15px / 600 / #616161. */
#${SECTION_ID} .ab35-row-price {
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #616161;
  margin: 0 8px 0 0;
}
/* Sub-note — figma: 12px / 15px / 400 / #000 (figma uses full black, not muted). */
#${SECTION_ID} .ab35-row-sub {
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  color: #000;
  /* Indent aligns the sub-note's left edge with the row's title (icon 32 + gap 12 = 44). */
  padding: 0 0 12px 44px;
  margin: -4px 0 0 0;
}
/* Hide the ship sub-note when the recipient toggle is off — the message only
   makes sense when ship-direct is enabled. */
#${SECTION_ID} .ab35-row-sub[hidden] { display: none; }

/* Toggle pill — figma: 48x24, radius 32, ON=#468036 / OFF=#FFFFFF with thin outline,
   thumb 20x20 (ON=white right-aligned / OFF=#CFCFCF left-aligned). */
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
  padding-top: 12px;
  /* Small bottom breathing room between counter and the cart's footers below.
     The scrollExpandIntoView() math accounts for sticky footers, so we don't
     need a giant intrinsic spacer here. */
  padding-bottom: 16px;
}
#${SECTION_ID} .ab35-expand[hidden] { display: none; padding-bottom: 0; }

#${SECTION_ID} .ab35-picker-label {
  font-size: 11.9px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0,0,0,0.7);
  margin: 0 0 8px 0;
}

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

/* "How should we send it?" segmented control */
#${SECTION_ID} .ab35-seg-label {
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0,0,0,0.7);
  margin: 12px 0 8px 0;
}
#${SECTION_ID} .ab35-seg {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 4px;
  background: #fff;
  margin-bottom: 8px;
}
#${SECTION_ID} .ab35-seg-btn {
  background: transparent;
  border: 0;
  padding: 10px 8px;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: #000;
  transition: background-color 150ms ease, color 150ms ease;
}
#${SECTION_ID} .ab35-seg-btn-title {
  font-size: 13.6px;
  line-height: 17px;
  font-weight: 600;
}
#${SECTION_ID} .ab35-seg-btn-sub {
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
  color: rgba(0,0,0,0.6);
}
#${SECTION_ID} .ab35-seg-btn.is-active {
  background: #54684E;
  color: #fff;
}
#${SECTION_ID} .ab35-seg-btn.is-active .ab35-seg-btn-sub {
  color: rgba(255,255,255,0.85);
}
#${SECTION_ID} .ab35-seg-help {
  font-size: 12px;
  line-height: 15px;
  color: rgba(0,0,0,0.6);
  text-align: center;
  margin: 4px 0 12px 0;
}

/* Textarea — wrapper hides when handwrite mode is 'blank' */
#${SECTION_ID} .ab35-textarea-wrap { position: relative; }
#${SECTION_ID} .ab35-textarea-wrap.is-hidden { display: none; }
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

    // Header — Title Case with colon, matches figma "Make it a gift:".
    section.appendChild(el('div', { class: 'ab35-title', text: 'Make it a gift:' }));

    // Row 1 — recipient (ship icon + title + toggle)
    const recipientIcon = el('div', { class: 'ab35-icon' }, [
      el('img', { src: ICON_SHIP_URL, alt: '', loading: 'lazy', decoding: 'async' }),
    ]);
    const recipientRow = el('div', { class: 'ab35-row', 'data-ab35-row': 'recipient' }, [
      recipientIcon,
      el('div', { class: 'ab35-row-text' }, [
        el('div', { class: 'ab35-row-title', text: 'Ship directly to the recipient' }),
      ]),
      buildToggle('recipient', state.shipToRecipient),
    ]);
    section.appendChild(recipientRow);

    // Ship sub-note row — only visible when shipToRecipient is ON.
    const shipNote = el('div', {
      class: 'ab35-row-sub',
      'data-ab35-ship-note': '',
      text: 'No receipt or prices on the packing slip.',
    });
    if (!state.shipToRecipient) shipNote.setAttribute('hidden', '');
    section.appendChild(shipNote);

    // Row 2 — card (envelope icon + title + "from Free" label + toggle)
    const cardIcon = el('div', { class: 'ab35-icon' }, [
      el('img', { src: ICON_CARD_URL, alt: '', loading: 'lazy', decoding: 'async' }),
    ]);
    const noteRow = el('div', { class: 'ab35-row', 'data-ab35-row': 'note' }, [
      cardIcon,
      el('div', { class: 'ab35-row-text' }, [
        el('div', { class: 'ab35-row-title', text: 'Include a greeting card' }),
      ]),
      el('span', { class: 'ab35-row-price', text: 'from Free' }),
      buildToggle('note', state.noteToggleOpen),
    ]);
    section.appendChild(noteRow);

    // Expanded area
    const expand = el('div', { class: 'ab35-expand' });
    if (!state.noteToggleOpen) expand.setAttribute('hidden', '');

    // "Pick a card design" label above the cards strip (matches prototype)
    expand.appendChild(el('div', { class: 'ab35-picker-label', text: 'Pick a card design' }));

    const cardsWrap = el('div', { class: 'ab35-cards-scroll', role: 'radiogroup', 'aria-label': 'Choose a greeting card' });

    if (!state.cardsLoaded) {
      fillSkeletons(cardsWrap, CARD_FALLBACKS.length);
    } else if (state.cards.length === 0) {
      cardsWrap.appendChild(el('div', { class: 'ab35-loading', text: 'Cards unavailable right now.' }));
    } else {
      state.cards.forEach((c) => cardsWrap.appendChild(buildCardNode(c)));
    }
    expand.appendChild(cardsWrap);

    // "How should we send it?" segmented control
    expand.appendChild(el('div', { class: 'ab35-seg-label', text: 'How should we send it?' }));
    const segBlank = el('button', {
      type: 'button',
      class: 'ab35-seg-btn' + (state.handwriteMode === 'blank' ? ' is-active' : ''),
      'data-mode': 'blank',
      'aria-pressed': state.handwriteMode === 'blank' ? 'true' : 'false',
    }, [
      el('span', { class: 'ab35-seg-btn-title', text: 'Leave it blank' }),
      el('span', { class: 'ab35-seg-btn-sub', text: 'Free' }),
    ]);
    const segWrite = el('button', {
      type: 'button',
      class: 'ab35-seg-btn' + (state.handwriteMode === 'write' ? ' is-active' : ''),
      'data-mode': 'write',
      'aria-pressed': state.handwriteMode === 'write' ? 'true' : 'false',
    }, [
      el('span', { class: 'ab35-seg-btn-title', text: 'Handwrite for me' }),
      el('span', { class: 'ab35-seg-btn-sub', text: '+$1.99' }),
    ]);
    expand.appendChild(el('div', { class: 'ab35-seg' }, [segBlank, segWrite]));
    expand.appendChild(el('div', {
      class: 'ab35-seg-help',
      text: state.handwriteMode === 'write'
        ? "Our team hand-letters your note inside the card before it ships."
        : "We'll tuck it in unwritten so you can fill it in yourself.",
    }));

    const textarea = el('textarea', {
      class: 'ab35-textarea',
      maxlength: NOTE_MAX,
      placeholder: 'Write your message… we’ll hand-letter it inside.',
    });
    textarea.value = state.noteText || '';
    const counter = el('div', { class: 'ab35-counter', text: `${(state.noteText || '').length}/${NOTE_MAX}` });
    const textareaWrap = el('div', {
      class: 'ab35-textarea-wrap' + (state.handwriteMode === 'write' ? '' : ' is-hidden'),
    }, [textarea, counter]);
    expand.appendChild(textareaWrap);

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

    // Seg control (Leave it blank / Handwrite for me)
    $$('.ab35-seg-btn', section).forEach((btn) => {
      btn.addEventListener('click', () => onSegClick(btn.getAttribute('data-mode')));
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
      // Default to 'blank' on each fresh open so the user explicitly opts into +$1.99.
      state.handwriteMode = 'blank';
      paintHandwriteMode();
      // Lazy-load cards on first open if not already.
      if (!state.cardsLoaded) {
        loadCards().then(() => rerenderCardsArea());
      }
      // Scroll the expanded area into view so the textarea (which lives below the cards
      // strip) isn't hidden behind the sticky checkout footer.
      scrollExpandIntoView();
    } else {
      const hadCard = !!state.cardLineKey;
      const hadFee = !!state.feeLineKey;
      const hadText = !!(state.noteText && state.noteText.length);
      track('ab35_note_toggle_off', { had_card: hadCard, had_text: hadText });
      LOG('note toggle OFF — hadCard:', hadCard, 'hadFee:', hadFee, 'hadText:', hadText);
      // Sweep card + fee lines, and reset the cart attribute to 'blank' so the order
      // doesn't get tagged 'gift-handwritten' if the user changed their mind.
      if (hadCard || hadFee) {
        state.cardLineKey = null;
        state.feeLineKey = null;
        enqueueCardWrite(() => removeAllCardLines().then(() => dispatchCartRefresh()));
        enqueueCardWrite(() => removeAllFeeLines().then(() => dispatchCartRefresh()));
      }
      state.selectedCardId = null;
      state.selectedCardHandle = null;
      state.noteText = '';
      state.handwriteMode = 'blank';
      enqueueCardWrite(() => persistHandwriteModeAttr());
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
          // Only attach the Gift Note property when the user opted into handwriting.
          // In 'blank' mode the cart line has no property — the 3PL won't try to hand-write.
          const properties = state.handwriteMode === 'write'
            ? { [CARD_PROPERTY_KEY]: state.noteText || '' }
            : undefined;
          LOG('POST /cart/add.js id=' + variantId + ' mode=' + state.handwriteMode);
          return postJson('/cart/add.js', {
            items: [{ id: variantId, quantity: 1, properties }],
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
    // Only persist the note to the cart when the user opted into handwriting service.
    // In 'blank' mode we keep the text in JS state but never send it to Shopify.
    if (!state.cardLineKey || state.handwriteMode !== 'write') return;
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

  // ---------- HANDWRITE MODE ----------
  // Writes the gift_card_mode cart attribute. Shopify Flow watches this and tags
  // the order 'gift-handwritten' when value === 'write'.
  function persistHandwriteModeAttr() {
    return postJson('/cart/update.js', {
      attributes: { [GIFT_MODE_ATTR_KEY]: state.handwriteMode },
    }).catch((e) => WARN('failed to persist gift_card_mode attribute', e));
  }

  // Sweep any orphan handwriting-fee line items from the cart (idempotent).
  function removeAllFeeLines() {
    if (!HANDWRITING_FEE_ENABLED || !HANDWRITING_FEE_VARIANT_ID) return Promise.resolve();
    return fetch('/cart.js')
      .then((r) => r.json())
      .then((cart) => {
        const feeLines = (cart.items || []).filter((i) => i.variant_id === HANDWRITING_FEE_VARIANT_ID);
        LOG('removeAllFeeLines — found', feeLines.length, 'fee lines to remove');
        return feeLines.reduce((p, line) => {
          return p.then(() => postJson('/cart/change.js', { id: line.key, quantity: 0 }).catch((e) => {
            WARN('failed to remove fee line', line.key, e);
            return null;
          }));
        }, Promise.resolve());
      })
      .catch((e) => { WARN('removeAllFeeLines fetch failed', e); return null; });
  }

  // Add the $1.99 handwriting fee as a cart line item. No-op when disabled or unconfigured.
  function addFeeLine() {
    if (!HANDWRITING_FEE_ENABLED || !HANDWRITING_FEE_VARIANT_ID) {
      LOG('addFeeLine skipped — fee disabled or variant not configured');
      return Promise.resolve();
    }
    return removeAllFeeLines()
      .then(() => postJson('/cart/add.js', {
        items: [{ id: HANDWRITING_FEE_VARIANT_ID, quantity: 1 }],
      }))
      .then((res) => {
        const item = (res && res.items && res.items[0]) || res;
        if (item && item.key) {
          state.feeLineKey = item.key;
          LOG('handwriting fee added — line key:', item.key);
        }
      })
      .catch((e) => WARN('addFeeLine failed', e));
  }

  function onSegClick(mode) {
    if (mode !== 'blank' && mode !== 'write') return;
    if (state.handwriteMode === mode) return;

    state.handwriteMode = mode;
    paintHandwriteMode();
    track('ab35_handwrite_mode_changed', { mode });

    // Persist the attribute immediately so the Flow rule sees the right value at checkout.
    // Route through the write queue so it's drained at checkout.
    enqueueCardWrite(() => persistHandwriteModeAttr());

    if (mode === 'write') {
      // Bring the newly-revealed textarea into view, same UX as opening the card row.
      scrollTextareaIntoView();
      enqueueCardWrite(() => addFeeLine());
      // If a card was already added with no note, persist the current noteText (if any).
      if (state.cardLineKey && state.noteText) {
        enqueueCardWrite(() => postJson('/cart/change.js', {
          id: state.cardLineKey,
          quantity: 1,
          properties: { [CARD_PROPERTY_KEY]: state.noteText },
        }).then(() => dispatchCartRefresh()).catch((e) => WARN('note persist failed', e)));
      }
    } else {
      // 'blank' — remove the fee, and clear the Gift Note from the card line (text stays in JS).
      state.feeLineKey = null;
      enqueueCardWrite(() => removeAllFeeLines().then(() => dispatchCartRefresh()));
      if (state.cardLineKey) {
        enqueueCardWrite(() => postJson('/cart/change.js', {
          id: state.cardLineKey,
          quantity: 1,
          properties: { [CARD_PROPERTY_KEY]: '' },
        }).then(() => dispatchCartRefresh()).catch((e) => WARN('note clear failed', e)));
      }
    }
  }

  // ---------- PAINTERS ----------
  function paintRecipientToggle() {
    const btn = $(`#${SECTION_ID} .ab35-toggle[data-ab35-toggle="recipient"]`);
    if (btn) btn.setAttribute('aria-checked', state.shipToRecipient ? 'true' : 'false');
    const shipNote = $(`#${SECTION_ID} [data-ab35-ship-note]`);
    if (shipNote) {
      if (state.shipToRecipient) shipNote.removeAttribute('hidden');
      else shipNote.setAttribute('hidden', '');
    }
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
  function paintHandwriteMode() {
    $$(`#${SECTION_ID} .ab35-seg-btn`).forEach((b) => {
      const mode = b.getAttribute('data-mode');
      const active = mode === state.handwriteMode;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const help = $(`#${SECTION_ID} .ab35-seg-help`);
    if (help) {
      help.textContent = state.handwriteMode === 'write'
        ? "Our team hand-letters your note inside the card before it ships."
        : "We'll tuck it in unwritten so you can fill it in yourself.";
    }
    const wrap = $(`#${SECTION_ID} .ab35-textarea-wrap`);
    if (wrap) wrap.classList.toggle('is-hidden', state.handwriteMode !== 'write');
  }
  // Walk up from `node` and return the first ancestor that actually scrolls.
  function findScrollParent(node) {
    let el = node && node.parentElement;
    while (el && el !== document.body) {
      const style = window.getComputedStyle(el);
      const oy = style.overflowY;
      if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  // After flipping the note toggle ON, scroll the cart drawer so the picker label
  // (top of the expand) anchors at the top of the visible area — and the cards + seg
  // control sit comfortably above the sticky checkout footer.
  // Runs three times — immediately, +50ms, and +350ms — to handle layout that settles
  // late (lazy images, slick carousel reflow, font swap, etc.).
  function scrollExpandIntoView() {
    const doScroll = () => {
      const section = document.getElementById(SECTION_ID);
      const pickerLabel = $(`#${SECTION_ID} .ab35-picker-label`);
      // Anchor on the "Pick a card design" label — that's the top of the new content.
      const target = pickerLabel || section;
      if (!target) return;

      const scroller = findScrollParent(target);
      if (!scroller) {
        // Last resort: ask the browser to bring the picker label into view.
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        LOG('scrollExpandIntoView: no scroll parent, used native scrollIntoView');
        return;
      }

      const scrollerRect = scroller.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      // We want the picker label ~12px below the scroller's visible top.
      const desiredTop = scrollerRect.top + 12;
      const delta = targetRect.top - desiredTop;
      if (Math.abs(delta) > 1) {
        const next = Math.max(
          0,
          Math.min(scroller.scrollTop + delta, scroller.scrollHeight - scroller.clientHeight),
        );
        scroller.scrollTo({ top: next, behavior: 'smooth' });
        LOG('scrollExpandIntoView: scrolled', delta, 'px');
      }
    };

    requestAnimationFrame(doScroll);
    setTimeout(doScroll, 50);
    setTimeout(doScroll, 350);
  }

  // After flipping the seg control to "Handwrite for me", scroll the cart drawer so
  // the textarea + counter are fully visible above the sticky checkout footer.
  // Uses the same scroll-parent walk + sticky-footer math as scrollExpandIntoView,
  // but anchors on the textarea wrapper (which is what the user just revealed).
  function scrollTextareaIntoView() {
    const doScroll = () => {
      const wrap = $(`#${SECTION_ID} .ab35-textarea-wrap`);
      const counter = $(`#${SECTION_ID} .ab35-counter`);
      const target = counter || wrap;
      if (!target || wrap?.classList.contains('is-hidden')) return;

      const scroller = findScrollParent(target);
      if (!scroller) {
        target.scrollIntoView({ behavior: 'smooth', block: 'end' });
        return;
      }

      // Account for stacked sticky footers at the bottom of the drawer.
      const stickyFooters = $$('.slidecarthq .footer-sticky, .slidecarthq footer.footer');
      const overlay = stickyFooters.reduce((h, f) => h + f.getBoundingClientRect().height, 0);

      const scrollerRect = scroller.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      // Want target's bottom 16px above the top of the stacked sticky footers.
      const desiredBottom = scrollerRect.bottom - overlay - 16;
      const overflow = targetRect.bottom - desiredBottom;
      if (overflow > 1) {
        scroller.scrollTo({
          top: Math.min(scroller.scrollTop + overflow, scroller.scrollHeight - scroller.clientHeight),
          behavior: 'smooth',
        });
        LOG('scrollTextareaIntoView: scrolled', overflow, 'px');
      }
    };

    requestAnimationFrame(doScroll);
    setTimeout(doScroll, 50);
    setTimeout(doScroll, 350);
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
      if (state.feeLineKey) {
        const feeStillThere = (cart.items || []).some((i) => i.key === state.feeLineKey);
        if (!feeStillThere) state.feeLineKey = null;
      }
      // Sync recipient flag and handwrite mode from cart attributes.
      const attrs = cart.attributes || {};
      const ship = attrs[RECIPIENT_ATTR_KEY];
      if (ship === 'Yes') state.shipToRecipient = true;
      else if (ship === 'No') state.shipToRecipient = false;
      const mode = attrs[GIFT_MODE_ATTR_KEY];
      if (mode === 'write' || mode === 'blank') state.handwriteMode = mode;
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
  // Track whether the upsells carousel has finished initializing on first sight.
  // Once true, we don't gate subsequent re-mounts (re-renders happen quickly).
  let upsellsReadyOnce = false;

  function isUpsellsReady(upsells) {
    if (!upsells) return false;
    // Slick carousel adds .slick-initialized once it has rendered its slides.
    if (upsells.querySelector('.slick-initialized')) return true;
    // If there's no slick wrapper at all (e.g. single upsell or slick disabled),
    // accept as soon as any .upsell child is present.
    return !!upsells.querySelector('.upsell');
  }

  // JS fallback for hiding the cart's "Discounts" footer row. The CSS rules above
  // cover modern browsers (:has() supported); this catches older browsers where
  // the parent .footer-row survives because :has() didn't match.
  function hideDiscountRow() {
    const footer = document.querySelector('.slidecarthq footer.footer, .slidecarthq .footer');
    if (!footer) return;
    // Find any element that signals "this row is the discount row".
    const markers = footer.querySelectorAll('.amp-sc__footer-row--discount, .slidecart-discount-amount');
    markers.forEach((m) => {
      // Walk up until we find the wrapping .footer-row, then hide it.
      let row = m;
      while (row && row !== footer && !row.classList.contains('footer-row')) {
        row = row.parentElement;
      }
      if (row && row.classList.contains('footer-row')) {
        row.style.display = 'none';
      }
    });
  }

  function ensureMounted() {
    const upsells = document.querySelector('.slidecarthq .upsells');
    if (!upsells || !upsells.parentNode) return;

    // On the very first mount of a session, wait until the upsells carousel is fully
    // initialized so our section paints below a populated "Grab Gifts:" — not above
    // a half-rendered one.
    if (!upsellsReadyOnce) {
      if (!isUpsellsReady(upsells)) return; // observer will retry on next mutation
      upsellsReadyOnce = true;
    }

    injectStyles();
    // SlideCart re-renders the footer on every cart change (incl. coupon apply),
    // so re-apply the discount-row hide on every ensureMounted() call.
    hideDiscountRow();

    if (isCartEmpty()) {
      const present = document.getElementById(SECTION_ID);
      if (present) present.style.display = 'none';
      return;
    }

    // If the section already exists, make sure it sits *immediately after* .upsells.
    // SlideCart re-renders can move .upsells to a different position in the tree;
    // if that happens, re-position our section instead of leaving it stranded.
    let section = document.getElementById(SECTION_ID);
    if (section) {
      if (upsells.nextSibling !== section) {
        upsells.parentNode.insertBefore(section, upsells.nextSibling);
        LOG('repositioned section to follow .upsells after re-render');
      }
      section.style.display = '';
      return;
    }

    section = buildSection();
    upsells.parentNode.insertBefore(section, upsells.nextSibling);

    // Refresh cart snapshot to sync state (does not block render).
    refreshCartSnapshot().then(() => {
      // Re-apply visuals in case attributes/line state changed.
      paintRecipientToggle();
      paintSelectedCard();
      paintHandwriteMode();
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

    // 1) Poll until SlideCart's upsells carousel is fully initialized, then mount.
    //    This guarantees our section paints *below* a populated "Grab Gifts:" — not
    //    above a half-rendered one.
    const initInterval = setInterval(() => {
      const upsells = document.querySelector('.slidecarthq .upsells');
      if (isUpsellsReady(upsells)) {
        clearInterval(initInterval);
        ensureMounted();
      }
    }, 200);
    // Safety: after 3s, drop the readiness gate and mount whatever's there.
    // Slick typically initializes in 200–800ms; if it hasn't by 3s, something else is
    // wrong and we shouldn't keep the user waiting on it.
    setTimeout(() => {
      clearInterval(initInterval);
      upsellsReadyOnce = true;
      ensureMounted();
    }, 3000);

    // 2) Watch the document for cart re-renders / drawer remounts.
    //    On every mutation, run ensureMounted() — it handles all four cases internally:
    //      a) section missing → build & insert,
    //      b) section present but no longer adjacent to .upsells → reposition,
    //      c) cart empty → hide,
    //      d) cart refilled → show.
    const observer = new MutationObserver(() => ensureMounted());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
