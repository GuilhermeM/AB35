# AB35 — Implementation Plan
## NMN | CART | AB35 — "Make it a gift" (handwritten note & greeting card) in cart drawer

**Target site:** nominalx.com (Shopify)
**Cart platform detected:** SlideCart HQ (`div.slidecarthq`) with `amp-sc__*` utility classes — DO NOT replace the cart drawer, only inject into it.
**Test tool:** [Varify.io](https://varify.io/) — paste the entire IIFE into the **Variant B → Custom JS** field. No URL targeting needed (Varify handles split). No control variant needed (Varify keeps original).
**Approach:** Single self-contained IIFE, pure front-end, no build step, no external assets except Shopify CDN images already provided.

---

## 0 — Reference inputs (in this folder)
| File | What it gives you |
|---|---|
| `hypothesis.md` | Business hypothesis, success metrics, card SKU URLs |
| `current-local-page.html` | Live DOM of the cart drawer (the only area you touch) |
| `current-full-page.html` | Full page DOM — for context, do NOT modify outside cart |
| `style.css` | Figma CSS export — desktop block ~L1–5770, mobile block ~L5771–end. Use it as a token reference (font sizes, colors, spacing), not as a literal stylesheet — Figma exports are noisy |
| `preview-desktop-1.pdf`, `preview-desktop-2.pdf` | Desktop visual: collapsed state (toggle OFF) and expanded state (toggle ON) |
| `preview-mobile-1.pdf`, `preview-mobile-2.pdf` | Mobile visual: collapsed and expanded states |
| `images-links.md` | 4 Shopify-hosted SVG icons already uploaded (ship, check, free, handwrite) — USE THESE, do not re-upload |
| `icon-*.svg` | Local copies of the same icons for offline preview |

**Tokens distilled from the figma CSS — use these in the IIFE:**
- Font family: `'Instrument Sans'` (already loaded by Nominal's theme — just specify it; do NOT inject `@import`).
- Brand greens: primary green `#54684E`, accent green (toggle on) `#468036`, success badge green `#2C872C`, light bg `rgba(84,104,78,0.1)`.
- Neutrals: title `#000`, subcopy `#616161`, divider `rgba(0,0,0,0.1)`, off-toggle thumb `#CFCFCF`, off-toggle track `#FFFFFF` with 1px outline.
- Section section sizes: title `13.6px / 17px / 600`, subcopy `12px / 15px / 400`, message-area placeholder `14px / 140%`, counter `12px / 140%`, both subcopy + counter use `rgba(0,0,0,0.6)`.
- Toggle pill: `48 × 24 px`, radius `32px`, thumb `20 × 20 px` with 2px inset.
- Card thumb: `80 × 107 px`, radius `3px`, selected-border `1.5px solid #468036`, "Free" pill top-left `34 × 15 px` background `#2C872C` radius `32px`, check badge top-right `14 × 14 px` background `#2C872C`.
- Textarea: full width, border `1px solid rgba(0,0,0,0.1)`, padding `8px 12px`, min-height `64px`, no border-radius.
- Section padding-bottom `16px`, gap between rows `12px`, separated by `border-bottom: 1px solid rgba(0,0,0,0.1)`.

**Hosted icon URLs (use as `<img>` src or inline `<svg>` — image tags are simpler):**
```
https://cdn.shopify.com/s/files/1/2556/8900/files/icon-ship.svg?v=1779146588        // 32x32, gift-box outline
https://cdn.shopify.com/s/files/1/2556/8900/files/icon-handwrite.svg?v=1779146589   // 32x32, envelope-pen outline
https://cdn.shopify.com/s/files/1/2556/8900/files/icon-check.svg?v=1779146588       // 14x14, green check badge (use on selected card)
https://cdn.shopify.com/s/files/1/2556/8900/files/icon-free.svg?v=1779146589        // 34x15, green "FREE" pill
```

---

## 1 — Goal in one sentence
Inject a **"Make it a gift"** module inside the SlideCart drawer (between `.upsells` and `.rewards`, BEFORE the existing `.footer`) that contains: (a) a **"Ship directly to the recipient"** toggle, (b) an **"Add a handwritten note & card — From +$1.99"** toggle that, when ON, reveals a horizontal scroll of greeting-card thumbnails + a 200-char textarea. Selecting a card adds the corresponding Shopify variant to the cart with the note attached as a line-item property, and persists the recipient flag as a cart attribute. The module must survive cart re-renders (SlideCart re-renders on every quantity/add/remove operation).

---

## 2 — Decisions locked with the user (read before coding)
1. **Cards = real Shopify variants.** The 5 URLs in `hypothesis.md` (Palestinian Blooms, Seeds Of Gratitude, Persian Rugs, Masjid Outline, Olive Branch greeting cards) are real products. The implementing dev MUST fetch each product's variant ID via `https://nominalx.com/products/<handle>.js` and hard-code the variant IDs in a `CARDS` array at the top of the IIFE. The "Free" card in the figma corresponds to whichever variant Shopify currently lists at `$0` — if no `$0` variant exists, default the first card visually as "Free" only if the live store has one; otherwise show all 5 at their real prices and remove the "Free" pill. **Do not fake the price client-side.**
2. **"Ship directly to recipient" toggle is in scope.** Persist state via `POST /cart/update.js` → `attributes: { 'Ship to recipient': 'Yes' | 'No' }`. Render even when the handwritten-note toggle is off (see preview-desktop-1).
3. **Handwritten note → line-item property on the greeting-card line.** Use `properties[Gift Note]: "<text>"` on the `items` payload when adding the chosen card variant.
4. **Tracking: documented only.** Do NOT wire `dataLayer.push` yourself — the data analyst will add tracking later. Just leave clearly-named hook points in code (a stub `track(name, payload)` no-op function) and a comment block listing the recommended events: `ab35_view`, `ab35_recipient_toggle`, `ab35_note_toggle_on`, `ab35_note_toggle_off`, `ab35_card_selected`, `ab35_note_typed` (debounced), `ab35_card_added_to_cart`, `ab35_checkout_clicked`.

---

## 3 — Where to inject (exact DOM targets)

The SlideCart structure (from `current-local-page.html`):
```
.slidecarthq.open
  ├── header.header                    ← bag count, close button
  ├── .announcements                   ← carousel banner
  ├── .eg-ab25-wrap > .eg-shipping-bar ← free shipping progress
  ├── .items                           ← line items
  ├── .upsells.upsells-stacked-container  ← "Grab Gifts:" carousel  ← INJECT AFTER THIS
  ├── .rewards                         ← free shipping tier bar
  └── footer.footer.new-footer         ← discounts + subtotal
  └── .footer-sticky                   ← secure-checkout CTA
```

**Insertion point:** `document.querySelector('.slidecarthq .upsells')` → `parentNode.insertBefore(makeItAGiftNode, upsellsNode.nextSibling)`.

The "Make it a gift" module sits **after** Grab Gifts and **before** Rewards. This matches both desktop and mobile previews.

**Wrap your injected node** in a single `<div id="ab35-gift-section" data-ab35>` so:
- you can find / re-find it on re-render,
- you can scope all CSS with `#ab35-gift-section .xxx`,
- you can `style.display = 'none'` it if the cart goes empty.

---

## 4 — Cart re-render handling (CRITICAL)

SlideCart re-renders `.items`, `.upsells`, `.rewards`, and `.footer` whenever the cart changes (qty change, remove, add). Your injected module **will be wiped** unless you re-inject. Strategy:

```js
function ensureMounted() {
  if (document.getElementById('ab35-gift-section')) return;
  const upsells = document.querySelector('.slidecarthq .upsells');
  if (!upsells || !upsells.parentNode) return;
  upsells.parentNode.insertBefore(buildSection(), upsells.nextSibling);
  rehydrateFromState(); // re-apply toggle states, selected card, note text
}

// 1) Initial poll: wait for SlideCart to render on first page load.
const initInterval = setInterval(() => {
  if (document.querySelector('.slidecarthq .upsells')) {
    clearInterval(initInterval);
    ensureMounted();
  }
}, 200);
setTimeout(() => clearInterval(initInterval), 15000); // safety stop

// 2) MutationObserver on .slidecarthq for re-renders.
const cartObserver = new MutationObserver(() => ensureMounted());
const cartRoot = document.body; // observe body — drawer may unmount/remount entirely
cartObserver.observe(cartRoot, { childList: true, subtree: true });

// 3) When cart becomes empty, hide section. When refilled, re-show.
//    Empty signal: .items has no .item children.
```

**State must live in JS module scope**, not in DOM (because DOM dies on re-render):
```js
const state = {
  shipToRecipient: false,
  noteToggleOpen: false,
  selectedCardId: null,   // shopify variant id
  noteText: '',
};
```
After re-injecting, read `state` and apply: toggle classes, selected `<div>` border, `<textarea>` value, char counter.

---

## 5 — Shopify cart API contract (use Fetch, NOT jQuery)

All endpoints return JSON. CORS is fine — same-origin.

| Purpose | Endpoint | Payload |
|---|---|---|
| Read current cart | `GET /cart.js` | — |
| Read a product's variants | `GET /products/<handle>.js` | — (one-time at IIFE init to resolve variant IDs) |
| Add line item with property | `POST /cart/add.js` | `{ items: [{ id: <variantId>, quantity: 1, properties: { "Gift Note": "<text>" } }] }` |
| Update line item's properties (when note changes after card added) | `POST /cart/change.js` | `{ id: "<lineItemKey>", quantity: 1, properties: { "Gift Note": "<newText>" } }` — use the line item's **key** from `/cart.js`, not variant id |
| Remove the card line | `POST /cart/change.js` | `{ id: "<lineItemKey>", quantity: 0 }` |
| Set cart attribute (recipient flag) | `POST /cart/update.js` | `{ attributes: { "Ship to recipient": "Yes" } }` |

All requests need:
```js
headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
body: JSON.stringify(payload)
```

**After every cart mutation**, trigger SlideCart to re-fetch the cart so its DOM updates (subtotal, item count, line items). Two reliable signals on Shopify themes:
1. Dispatch `document.dispatchEvent(new CustomEvent('cart:refresh'))` — many SlideCart builds listen for this.
2. As a fallback also dispatch `window.dispatchEvent(new Event('cart:updated'))` and `document.dispatchEvent(new Event('cart:build'))`.

If neither updates the drawer (verify in QA), call `window.SlideCart?.refresh?.()` or simply re-open the drawer programmatically by clicking the cart icon. **Implementing dev: confirm which event SlideCart HQ listens to in QA and keep only the one that works.**

---

## 6 — Build steps for the implementing dev

### Step 1. Scaffold the IIFE
```js
(function () {
  'use strict';
  if (window.__AB35_INITED__) return;          // hard guard against double-injection
  window.__AB35_INITED__ = true;

  // ---- CONFIG ----
  const CARDS = [
    // FILL IN: resolve via fetch('/products/<handle>.js') at first run.
    // Each entry: { id, title, price, image, isFree }
  ];
  const NOTE_MAX = 200;

  // ---- STATE ----
  const state = { shipToRecipient: false, noteToggleOpen: false, selectedCardId: null, noteText: '', cardLineKey: null };

  // ---- TRACK STUB (data analyst will wire later) ----
  function track(name, payload) { /* noop — analyst will replace */ }

  // ... rest of the module
})();
```

### Step 2. Resolve variant IDs once at startup
```js
const HANDLES = [
  'palestinian-blooms-greeting-card',
  'seeds-of-gratitude-greeting-card',
  'persian-rugs-greeitng-card',          // NOTE: this typo is in the live URL — keep as-is
  'masjid-outline-greeting-card',
  'olive-branch-greeting-card',
];

async function loadCards() {
  const results = await Promise.all(HANDLES.map(async (h) => {
    try {
      const r = await fetch(`/products/${h}.js`);
      if (!r.ok) return null;
      const p = await r.json();
      const v = p.variants?.[0]; if (!v) return null;
      return {
        id: v.id,
        title: p.title,
        price: v.price,                          // cents
        image: p.featured_image || p.images?.[0],
        isFree: v.price === 0,
      };
    } catch { return null; }
  }));
  return results.filter(Boolean);
}
```
Render the card strip only after `loadCards()` resolves. If a card fails to load, just skip it (don't crash). If all fail, hide the "Add a handwritten note & card" row entirely — there's nothing to sell.

### Step 3. Inject scoped CSS once
Inject a single `<style id="ab35-style">` into `<head>` with all rules prefixed `#ab35-gift-section`. Do NOT use global selectors. Include the tokens from §0. Mobile: same module, just shrink text-area horizontal scroll and reduce side padding. Use a single `@media (max-width: 600px)` block — the cart drawer goes ~86% width on mobile (see existing `style="width: 86%;"` on `.slidecarthq`).

### Step 4. Build the section DOM
Top-level structure (HTML below is illustrative — produce it via `document.createElement` or a tagged-template helper, your call):

```html
<div id="ab35-gift-section" data-ab35>
  <div class="ab35-title">Make it a gift:</div>

  <div class="ab35-row" data-ab35-row="recipient">
    <div class="ab35-row-left">
      <div class="ab35-icon"><img src="…icon-ship.svg" alt=""></div>
      <div class="ab35-row-text">
        <div class="ab35-row-title">Ship directly to the recipient</div>
        <div class="ab35-row-sub">No receipt or prices on the packing slip</div>
      </div>
    </div>
    <button class="ab35-toggle" role="switch" aria-checked="false" data-ab35-toggle="recipient">
      <span class="ab35-toggle-thumb"></span>
    </button>
  </div>

  <div class="ab35-row" data-ab35-row="note">
    <div class="ab35-row-left">
      <div class="ab35-icon"><img src="…icon-handwrite.svg" alt=""></div>
      <div class="ab35-row-text">
        <div class="ab35-row-title">Add a handwritten note &amp; card</div>
        <div class="ab35-row-sub">From +$1.99</div>
      </div>
    </div>
    <button class="ab35-toggle" role="switch" aria-checked="false" data-ab35-toggle="note">
      <span class="ab35-toggle-thumb"></span>
    </button>
  </div>

  <!-- Revealed only when noteToggleOpen === true -->
  <div class="ab35-expand" hidden>
    <div class="ab35-cards" role="radiogroup" aria-label="Choose a greeting card">
      <!-- one .ab35-card per CARDS entry -->
    </div>
    <div class="ab35-textarea-wrap">
      <textarea class="ab35-textarea" maxlength="200"
                placeholder="Write your message… we’ll hand-letter it inside."></textarea>
      <div class="ab35-counter">0/200</div>
    </div>
  </div>
</div>
```

Each card:
```html
<button class="ab35-card" role="radio" aria-checked="false" data-card-id="<variantId>">
  <div class="ab35-card-thumb" style="background-image:url('…')">
    <!-- show .ab35-free-pill if isFree -->
    <!-- show .ab35-check-badge when selected -->
  </div>
  <div class="ab35-card-title">{title}</div>
  <div class="ab35-card-price">{free ? 'Free' : '$5'}</div>
</button>
```

The cards strip is **horizontal-scroll** on mobile (`overflow-x:auto; scroll-snap-type:x mandatory`) and a flex row that fits ~5 thumbs on desktop. Match figma spacing of 8–12px gap.

### Step 5. Wire the interactions
| Event | Action |
|---|---|
| Click `.ab35-toggle[data-ab35-toggle="recipient"]` | flip `state.shipToRecipient`, update `aria-checked` + thumb position. Call `POST /cart/update.js` with `attributes: { 'Ship to recipient': state.shipToRecipient ? 'Yes' : 'No' }`. Call `track('ab35_recipient_toggle', { on: state.shipToRecipient })`. |
| Click `.ab35-toggle[data-ab35-toggle="note"]` | flip `state.noteToggleOpen`. Toggle `.ab35-expand[hidden]`. If turning OFF and a card was previously added, REMOVE the card line via `POST /cart/change.js` with `quantity: 0`, clear `state.selectedCardId` + `state.noteText`. Fire `ab35_note_toggle_on/off`. |
| Click `.ab35-card` | If a different card was previously selected, first remove that line (`change.js qty=0`). Then `POST /cart/add.js` with `items: [{ id, quantity: 1, properties: { 'Gift Note': state.noteText \|\| '' } }]`. On success, store the returned line item `key` into `state.cardLineKey`, update `state.selectedCardId`, paint the selected style + check badge, dispatch cart-refresh events. Fire `ab35_card_selected` + `ab35_card_added_to_cart`. |
| `input` on `.ab35-textarea` | update `state.noteText`, update counter `{n}/200`. **Debounce 600ms** then if `state.cardLineKey` exists, `POST /cart/change.js` with updated `properties: { 'Gift Note': state.noteText }`. Fire `ab35_note_typed` (debounced). |
| Click `.button.full` inside `#slidecart-checkout-form` (existing Secure Checkout) | Fire `ab35_checkout_clicked` with current state — do NOT preventDefault. Use `addEventListener` in capture phase, only attached once via a guard. |

### Step 6. Re-hydrate after every re-render
After `ensureMounted()` re-injects the section:
1. Set toggle visual states from `state.shipToRecipient` and `state.noteToggleOpen`.
2. If `state.noteToggleOpen`, un-hide `.ab35-expand` and repaint the selected card + textarea + counter from `state.noteText`.
3. If `state.cardLineKey` is set but `/cart.js` no longer contains that key (user removed the card from the items list manually), clear `state.cardLineKey` + `state.selectedCardId`. To check this cheaply, refresh `cartSnapshot = await fetch('/cart.js').then(r=>r.json())` once per re-render and inspect `cartSnapshot.items`.

### Step 7. Empty-cart behavior
Hypothesis URL Rule says: "Cart drawer, triggered when users have at least one product in the cart." If `cartSnapshot.item_count === 0`, set `#ab35-gift-section { display: none }`. Re-show as soon as count > 0.

---

## 7 — Visual spec checklist (match figma exactly)

Use this when QA'ing — open the previews side-by-side with the live drawer.

- [ ] Section header **"Make it a gift:"** at 13.6px / 17px / 600 / black, left-aligned, with 16px bottom padding to the first row.
- [ ] **Row 1 (recipient):** ship icon in a 32×32 circle with `rgba(84,104,78,0.1)` fill. Title 13.6px/600/black. Sub 12px/400/black ("No receipt or prices on the packing slip"). Toggle right-aligned, default **ON** (per figma desktop-1 & mobile-1). When ON, track `#468036`, thumb white right-aligned. When OFF, track white with thin border, thumb `#CFCFCF` left-aligned.
- [ ] **Row 2 (note):** envelope-pen icon, same circle style. Title 13.6px/600. Sub "From +$1.99" 12px/600 in `#616161`. Toggle defaults **OFF**.
- [ ] Divider `border-bottom: 1px solid rgba(0,0,0,0.1)` between sections.
- [ ] **Expanded state** (only when note toggle ON):
  - Card row: 5 thumbs at 80×107px each, 8–12px gap, scroll-snap on mobile.
  - First card has a green "Free" pill (top-left, 34×15, `#2C872C` bg, white text 10px/500) when its variant price === 0.
  - Selected card: `1.5px solid #468036` border + a `14×14` green check badge top-right (use `icon-check.svg`).
  - Below the cards row: title text wraps under each thumb (12px/600 black) and price (12px/600 `#616161`).
  - Textarea: full width, 1px `rgba(0,0,0,0.1)` border, no radius, 8px×12px padding, placeholder text "Write your message… we'll hand-letter it inside." in `rgba(0,0,0,0.6)` 14px/140%.
  - Counter `{n}/200` right-aligned below textarea in 12px/140% `rgba(0,0,0,0.6)`.
- [ ] Section sits between `.upsells` ("Grab Gifts:") and `.rewards` (the free-shipping progress bar). On mobile, vertical order is identical.
- [ ] Does NOT push the Secure Checkout out of view — section is part of scrollable area, the sticky footer stays pinned.

---

## 8 — QA checklist (run before declaring done)

Open Chrome DevTools → mobile emulation → iPhone 12 Pro for mobile pass; default desktop viewport for desktop pass.

1. Load `nominalx.com`, add 1 product to cart, open cart drawer → section appears in the right slot, recipient toggle is **ON** by default, note toggle **OFF**, expanded area is hidden.
2. Toggle recipient OFF → check `GET /cart.js` returns `attributes['Ship to recipient'] === 'No'`.
3. Toggle note ON → expanded area animates in (or just appears — animation optional), 5 cards visible, no card selected, textarea empty, counter shows `0/200`.
4. Click a non-free card → loading state on the card (optional), then green border + check badge appear. `GET /cart.js` shows a new line item for that variant with `properties['Gift Note'] === ''`. Cart subtotal in SlideCart footer updates.
5. Type "Happy birthday" → counter shows `14/200`. After ~600ms `GET /cart.js` shows `properties['Gift Note'] === 'Happy birthday'`.
6. Type 201 characters worth → maxlength caps at 200, counter shows `200/200`.
7. Click a different card → previous card's line is removed from `/cart.js`, new card's line is added with the existing note preserved as a property.
8. Toggle note OFF → card line is removed from `/cart.js`, expanded area hides, `state.selectedCardId` clears.
9. Change qty of another line item in `.items` → SlideCart re-renders → `#ab35-gift-section` is re-injected with the same state (toggle states, selected card, textarea text).
10. Close cart, reopen → state persists for the session (it's just JS module state — DO NOT add localStorage unless the user requests it; cart attributes + line-item properties are the source of truth).
11. Remove ALL items from cart → section hides. Add an item back → section reappears, state intact.
12. Resize from desktop → mobile mid-session → layout snaps correctly, scroll-snap engaged on card strip.
13. Click "🔒 Secure Checkout" → no JS errors, navigation proceeds. Line items + properties + attributes carry to checkout.
14. Console: `0` errors, `0` warnings from the IIFE.

---

## 9 — Tracking hooks (for the data analyst — DO NOT IMPLEMENT, just leave stubs)

The implementing dev should leave a single function `track(name, payload)` that is currently a no-op, and call it at the points listed below. The data analyst will replace the body with `window.dataLayer.push(...)` calls.

Recommended event names + payloads:

| When | Event name | Suggested payload |
|---|---|---|
| Section first becomes visible in viewport | `ab35_view` | `{}` |
| Recipient toggle flipped | `ab35_recipient_toggle` | `{ on: boolean }` |
| Note toggle flipped on | `ab35_note_toggle_on` | `{}` |
| Note toggle flipped off | `ab35_note_toggle_off` | `{ had_card: boolean, had_text: boolean }` |
| Card selected | `ab35_card_selected` | `{ variant_id, title, price_cents, is_free: boolean }` |
| Card successfully added to cart | `ab35_card_added_to_cart` | `{ variant_id, line_item_key }` |
| Note typed (debounced 600ms) | `ab35_note_typed` | `{ length: number }` |
| Secure Checkout clicked while section was used | `ab35_checkout_clicked` | `{ recipient: boolean, card_id: <id\|null>, note_length: number }` |

(Section "view" detection: an `IntersectionObserver` on `#ab35-gift-section` firing once per session-cart-open is fine. Implementing dev: stub it but don't connect to dataLayer.)

---

## 10 — Out of scope (do NOT do these)

- ❌ Do not change anything outside `#ab35-gift-section` (no edits to `.upsells`, `.rewards`, `.footer`, header, etc.).
- ❌ Do not modify, hide, or "fix" the existing `.upsells.upsells-stacked-container` ("Grab Gifts:") carousel — hypothesis acknowledges its poor contrast but that is a separate test.
- ❌ Do not implement localStorage persistence — cart attributes + line item properties are the source of truth.
- ❌ Do not implement true control logic — Varify handles the 50/50 split. The IIFE only runs on Variant B.
- ❌ Do not load external CSS/JS. All styles inline via a single `<style>` tag; no `<link>` injection. The 4 SVGs come from Shopify CDN URLs already.
- ❌ Do not introduce jQuery, lodash, or any library. Vanilla JS only — Varify runs the script once per pageview, footprint matters.
- ❌ Do not animate aggressively. Subtle 150–200ms transitions on toggle thumb + expanded area max-height are fine; avoid spring/bounce.
- ❌ Do not call `window.SlideCart.refresh()` blindly — confirm the method exists in QA before relying on it. Prefer the cart event dispatch path.
- ❌ Do not fire `dataLayer.push` yourself — leave it for the data analyst.

---

## 11 — Deliverable

A **single JavaScript file**, `ab35-variant-b.js`, containing one IIFE, ready to paste into Varify's Variant B Custom JS field. No surrounding `<script>` tags. No source maps. Top-of-file block comment with:

```
/*
 * AB35 — Make it a gift (handwritten note & card) — Variant B
 * Target: nominalx.com cart drawer (SlideCart HQ)
 * Inject via Varify.io → Variant B → Custom JS
 * Built: <YYYY-MM-DD>
 */
```

Place the file at `/Users/guilhermemiguel/Documents/_WC/_NOMINALX/AB35/ab35-variant-b.js` when complete. Update this `documentation.md` with a short "Implementation notes" section at the bottom flagging any deviations from this plan and any TODOs the analyst still needs (e.g., "free-card logic skipped — no $0 variant on store").

---

## 12 — Implementation notes (2026-05-18)

Built into [ab35-variant-b.js](ab35-variant-b.js). Behavior follows the plan; differences and call-outs grouped below.

### Card data resolution
- **Verified hardcoded fallbacks.** All 5 greeting-card handles were curl'd against `nominalx.com/products/<handle>.js` on 2026-05-18 — each resolved to an active variant at **$3.50** (350¢). The variant IDs, titles, and image URLs are baked into a `CARD_FALLBACKS` array at the top of the IIFE (see [ab35-variant-b.js:22-29](ab35-variant-b.js#L22-L29)).
- **Live vs. preview behavior.** `IS_NOMINAL_ORIGIN` (regex on `location.hostname`) decides whether to fetch `/products/<h>.js` for fresh data or use fallbacks directly. In the Varify preview iframe (and any other non-nominalx origin) the relative fetch fails CORS, so we skip it and render from fallbacks synchronously. On the live store we still fetch — if a single handle fails the fallback for that card kicks in; if all 5 fail the note row is hidden entirely.
- **No `$0` "Free" card.** None of the 5 variants is priced at zero, so the green "Free" pill never renders. Spec §2.1 said do not fake the price client-side. If merch wants a free card, they'll need to create a `$0` variant in Shopify and the pill will appear automatically.
- **Persian Rugs handle typo (`persian-rugs-greeitng-card`) preserved** to match the live URL.

### Cart write semantics — only one greeting card per order
- **Single-card invariant.** The spec ("there's no more than 1 gift card per order") is enforced by `removeAllCardLines()` which fetches `/cart.js`, filters items whose `variant_id` is in the `CARD_VARIANT_IDS` set, and sequentially `change.js qty=0`s every one of them. Sequential — not parallel — because Shopify's `/cart/change.js` rejects parallel writes with line-index drift.
- **All writes serialized through `cardWriteQueue`.** Card add, card swap, card removal on note-toggle-OFF, and debounced note-property updates all go through `enqueueCardWrite(taskFn)` (see [ab35-variant-b.js:951-959](ab35-variant-b.js#L951-L959)). This guarantees rapid taps cannot race and double-add — the queue processes them in order and each step sweeps existing card lines before adding the new one.
- **Optimistic UI with rollback.** Clicking a card immediately paints the green border + check badge. If the underlying `add.js` rejects, state reverts to the previous selection — but only if the user hasn't already clicked a different card in the meantime (latest-pick guard via `state.selectedCardId !== variantId` checks).

### Checkout race-condition fix (CRITICAL)
- **The bug that caused cards to disappear at checkout.** The Secure Checkout button is a `<form action="/cart" method="post"><button name="checkout">` that submits and navigates within milliseconds of being clicked. If the user tapped a card and then immediately clicked checkout, the browser would tear down the JS context **before `/cart/add.js` had committed server-side** — the card was lost.
- **Fix.** [ab35-variant-b.js:963-1018](ab35-variant-b.js#L963-L1018) — `attachCheckoutHook()` now uses a capture-phase document listener that checks `pendingWrites > 0 || debouncedNotePersist.pending()`. If anything is in flight, it `preventDefault`s the click, swaps the button label to "🔒 One sec…", flushes the debounced note save, waits for `cardWriteQueue` to drain (with a 4s safety timeout), then programmatically re-clicks the button. On the second pass `pendingWrites === 0` so the click passes through to SlideCart's normal handler.
- **`pendingWrites` counter** increments inside `enqueueCardWrite` and decrements in a `.finally()`. The debounce utility ([ab35-variant-b.js:71-95](ab35-variant-b.js#L71-L95)) was extended to expose `.pending()` and `.flush()` so the checkout hook can flush a half-typed note before draining.

### Loading & image states
- **Skeleton placeholders.** While `loadCards()` is in-flight, the strip renders 5 shimmering skeleton cards (80×107 thumb + 2 text lines) instead of "Loading cards…" text. CSS keyframe `ab35-shimmer` runs at 1.2s ease-in-out infinite.
- **Per-thumb image-load shimmer.** Each real `.ab35-card-thumb` ships with a shimmer overlay (`::before` pseudo) that only fades out when the `<img>`'s `load` or `error` event fires (`is-loaded` class). Cached images get `is-loaded` set synchronously via `img.complete && img.naturalWidth > 0`. This kills the bare grey/black thumbnail flash that's visible on the existing upsells carousel.
- **Real `<img>` element** with `decoding: 'async'` + `loading: 'lazy'` instead of `background-image`, so the browser handles the image lifecycle and we can hook load events.

### Re-render handling
- **MutationObserver on `document.body`** — the entire `.slidecarthq` may unmount/remount on cart operations, not just `.items`. State lives in JS module scope and re-applies via painters (`paintRecipientToggle`, `paintNoteToggle`, `paintSelectedCard`) after each re-inject.
- **Empty cart** → `#ab35-gift-section` hides via `display:none`. Refill → re-shows, state intact.
- **Recipient toggle default = ON** per figma. On first paint no `/cart/update.js` fires — only on user flip. `refreshCartSnapshot()` syncs the visual from `cart.attributes['Ship to recipient']` if a prior session set it.

### Cart-refresh signal
- Dispatches `cart:refresh`, `cart:updated`, and `cart:build` and best-effort calls `window.SlideCart.refresh()`. **QA TODO:** confirm in DevTools which signal SlideCart HQ actually consumes on this theme and trim any that are noisy.

### Diagnostics
- **`[AB35]` console logs** at every cart-write step (card click, sweep count, add.js request/response, line-key assignment, checkout deferral). Filter for `[AB35]` in DevTools. Easy to remove later by deleting the `LOG`/`WARN` helpers and their call sites.

### Constraints honored
- No `localStorage`, no jQuery, no `@import`, no external CSS/JS injection. Single inline `<style id="ab35-style">` block, all rules scoped under `#ab35-gift-section`.
- `track(name, payload)` is a no-op; call-sites cover every event listed in §9. Analyst replaces the function body.

### Outstanding QA items (need live store access to verify)
1. Confirm which `cart:*` event SlideCart HQ listens to and trim the others.
2. Verify the 5 card variant IDs in `CARD_FALLBACKS` still match production (re-curl if any product is renamed).
3. Confirm with merch whether a `$0` "Free" card variant is desired — if so, create it in Shopify and the pill will appear automatically.
4. Verify the checkout deferral is invisible to users in the common case (writes typically settle in <500ms; the 4s timeout is only a safety net).
