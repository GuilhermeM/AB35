console.log("ok");

(function () {
  try {
    /* ============================================================
       NMN|CART|AB25-V2 — Mini Cart: Shipping Bar + Free Gift Modal
       (Gift Box Progress Bar removed)
       Platform: Shopify theme-native (extracted from Varify IIFE)
       ============================================================ */

    var debug = 1;
    var variation_name = "AB25-V2";

    /* ======================== HELPERS ======================== */

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    /* ======================== CURRENCY / THRESHOLDS ======================== */

    function egGetCurrency() {
      try {
        if (window.Shopify && window.Shopify.currency && window.Shopify.currency.active) {
          return window.Shopify.currency.active;
        }
      } catch (e) { }
      return "USD";
    }

    function egGetThresholds() {
      var currency = egGetCurrency();
      if (currency === "CAD") {
        return { shipping: 160, gift: 200, symbol: "$", suffix: " CAD", freeShipping: false };
      }
      if (currency === "GBP") {
        return { shipping: 0, gift: 200, symbol: "\u00A3", suffix: "", freeShipping: true };
      }
      return { shipping: 75, gift: 200, symbol: "$", suffix: "", freeShipping: false };
    }

    /* ======================== CART VALUE ======================== */

    function egGetCartValue() {
      var subtotalEl = document.querySelector("#slidecarthq .footer .slidecart-subtotal");
      console.log("[AB25-V2] subtotal selector 1:", subtotalEl);
      if (!subtotalEl) {
        subtotalEl = document.querySelector("#slidecarthq .footer-subtotal-wrapper .slidecart-subtotal");
        console.log("[AB25-V2] subtotal selector 2:", subtotalEl);
      }
      if (!subtotalEl) {
        subtotalEl = document.querySelector("#slidecarthq .footer strong.slidecart-subtotal");
        console.log("[AB25-V2] subtotal selector 3:", subtotalEl);
      }
      if (!subtotalEl) {
        console.log("[AB25-V2] NO subtotal element found! Returning 0");
        return 0;
      }

      var text = subtotalEl.innerText || subtotalEl.textContent || "";
      var cleaned = text.replace(/[^0-9.,]/g, "");
      // Handle comma as decimal separator (e.g. R$ 203,00)
      if (cleaned.indexOf(",") > -1 && cleaned.indexOf(".") === -1) {
        cleaned = cleaned.replace(",", ".");
      } else if (cleaned.indexOf(",") > -1 && cleaned.indexOf(".") > -1) {
        cleaned = cleaned.replace(",", "");
      }
      var value = parseFloat(cleaned) || 0;
      console.log("[AB25-V2] Cart value - raw text:", text, "| cleaned:", cleaned, "| parsed:", value);
      return value;
    }

    /* ======================== SVG ICONS ======================== */

    var truckSVG = function (color) {
      return '<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M5.66 10.07C5.66 10.91 4.98 11.6 4.14 11.6C3.3 11.6 2.62 10.92 2.62 10.07M5.66 10.07C5.66 9.23 4.98 8.55 4.14 8.55C3.3 8.55 2.62 9.23 2.62 10.07M5.66 10.07H10.49M2.62 10.07H1V8.83M14.19 10.07C14.19 10.91 13.51 11.6 12.67 11.6C11.83 11.6 11.15 10.92 11.15 10.07M14.19 10.07C14.19 9.23 13.51 8.55 12.67 8.55C11.83 8.55 11.15 9.23 11.15 10.07M14.19 10.07H15.17V8.22V7.15V6.72L14.04 5.84M11.15 10.07H10.49M14.04 5.84L13.61 3.6H10.49M14.04 5.84H10.49M10.49 3.6V2H5.92H1V6.72M10.49 3.6V5.84M10.49 10.07V6.72V5.84" stroke="' + color + '" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>';
    };

    var giftSVG = function (color) {
      return '<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M1.5 5.79V15H12.5V5.79H6.79M6.79 5.79C4.24 5.79 3.42 4.16 4.11 3.56C5.24 2.56 7.05 5.99 7.93 5.72C8.67 5.49 10.21 5.18 10.55 3.79C10.86 2.5 8.75 1.73 7.54 3.7C6.72 5.03 6.48 6.93 4.91 7.2M6.79 5.79C7.52 7.73 8.12 8.48 9.5 9.25" stroke="' + color + '" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>';
    };

    var checkBadgeSVG = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="7" cy="7" r="6.5" fill="#54684E" stroke="white" stroke-width="1"/>' +
      '<path d="M9.5 5.2L6.2 8.5L4.5 6.8" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';

    var modalGiftSVG = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M8 18V44H40V18H24M24 18C18.5 18 17 14.5 18.2 13.3C20.4 11.1 24.5 18.5 26.3 17.9C27.8 17.4 31 16.8 31.6 14.2C32.2 11.8 28.2 10.4 26 14.3C24.5 17 24 21 21 21.5M24 18C25.5 22.7 26.7 24 29 25.5" stroke="#54684E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';

    /* ======================== FEATURE 1: SHIPPING + FREE GIFT PROGRESS BAR ======================== */

    function egBuildShippingBar() {
      return '' +
        '<div class="eg-shipping-bar" id="eg-shipping-bar">' +
        '<div class="eg-shipping-text">' +
        '<span class="eg-shipping-text-left"></span>' +
        '<span class="eg-shipping-text-right"></span>' +
        '</div>' +
        '<div class="eg-shipping-track">' +
        '<div class="eg-shipping-fill"></div>' +
        '<div class="eg-shipping-icon eg-shipping-truck">' +
        '<span class="eg-shipping-icon-badge">' + checkBadgeSVG + '</span>' +
        '</div>' +
        '<div class="eg-shipping-icon eg-shipping-gift">' +
        '<span class="eg-shipping-icon-badge">' + checkBadgeSVG + '</span>' +
        '</div>' +
        '</div>' +
        '</div>';
    }

    function egUpdateShippingBar() {
      var wrap = document.getElementById("eg-shipping-bar");
      if (!wrap) return;

      var thresholds = egGetThresholds();
      var cartValue = egGetCartValue();

      var textLeft = wrap.querySelector(".eg-shipping-text-left");
      var textRight = wrap.querySelector(".eg-shipping-text-right");
      var fill = wrap.querySelector(".eg-shipping-fill");
      var truckIcon = wrap.querySelector(".eg-shipping-truck");
      var giftIcon = wrap.querySelector(".eg-shipping-gift");
      var track = wrap.querySelector(".eg-shipping-track");

      var trackWidth = track.offsetWidth || 311;

      var shippingReached = thresholds.freeShipping || cartValue >= thresholds.shipping;
      var giftReached = cartValue >= thresholds.gift;

      // Position truck icon
      var truckPercent = thresholds.freeShipping ? 5 : (thresholds.shipping / thresholds.gift) * 100;
      truckIcon.style.left = truckPercent + "%";

      // Calculate fill percentage based on gift threshold ($200)
      var fillPercent = Math.min((cartValue / thresholds.gift) * 100, 100);

      // When shipping is reached, ensure fill extends past the truck icon so it's fully covered
      if (shippingReached && fillPercent < truckPercent + 10) {
        fillPercent = truckPercent + 10;
      }

      fill.style.width = Math.max(fillPercent, 0) + "%";

      // Position gift icon at end
      giftIcon.style.left = "96%";

      // Truck icon color
      var truckFillPx = (fillPercent / 100) * trackWidth;
      var truckPosPx = (truckPercent / 100) * trackWidth;
      var truckOnFill = truckFillPx >= truckPosPx;
      truckIcon.innerHTML = '<span class="eg-shipping-icon-badge' + (shippingReached ? ' eg-visible' : '') + '">' + checkBadgeSVG + '</span>' + truckSVG(truckOnFill ? "#FFFFFF" : "#54684E");

      // Gift icon color
      var giftPosPx = (96 / 100) * trackWidth;
      var giftOnFill = truckFillPx >= giftPosPx;
      giftIcon.innerHTML = '<span class="eg-shipping-icon-badge' + (giftReached ? ' eg-visible' : '') + '">' + checkBadgeSVG + '</span>' + giftSVG(giftOnFill ? "#FFFFFF" : "#54684E");

      // Text updates
      if (thresholds.freeShipping) {
        // UK: always free shipping
        textLeft.innerHTML = '<strong>Free Shipping Unlocked</strong>';
      } else if (shippingReached) {
        textLeft.innerHTML = '<strong>Free Shipping Unlocked</strong>';
      } else {
        var shippingRemaining = Math.ceil(thresholds.shipping - cartValue);
        textLeft.innerHTML = '<span class="eg-amount">' + thresholds.symbol + shippingRemaining + thresholds.suffix + '</span> away from <strong>Free Shipping</strong>';
      }

      if (giftReached) {
        textRight.innerHTML = '<strong>Free Gift Item Unlocked</strong>';
      } else {
        var giftRemaining = Math.ceil(thresholds.gift - cartValue);
        textRight.innerHTML = '<span class="eg-amount">' + thresholds.symbol + giftRemaining + thresholds.suffix + '</span> away from <strong>Free Gift Item</strong>';
      }
    }

    /* ======================== FEATURE 2: FREE ITEM MODAL ======================== */

    var egModalOpen = false; // tracks whether modal is currently visible

    function egShowModal() {
      console.log("[AB25-V2] egShowModal() called");
      if (egModalOpen) {
        console.log("[AB25-V2] egShowModal: modal already open, skipping");
        return;
      }
      egModalOpen = true;
      console.log("[AB25-V2] Building modal DOM");

      // Use AB18-proven wrapper pattern: separate wrapper → overlay → card
      // All appended to document.body to escape any transform/stacking context
      var wrap = document.createElement("div");
      wrap.className = "eg-modal-wrap";
      wrap.innerHTML = '' +
        '<div class="eg-modal-overlay" data-eg-modal-close></div>' +
        '<div class="eg-modal-card">' +
        '<button class="eg-modal-close" aria-label="Close" data-eg-modal-close>&times;</button>' +
        '<div class="eg-modal-icon">' + modalGiftSVG + '</div>' +
        '<h2 class="eg-modal-headline">Free Item Unlocked</h2>' +
        '<p class="eg-modal-sub">You\'ve just unlocked a free item from our Clearance section.</p>' +
        '<p class="eg-modal-support">Pick any item from the Clearance collection and it will be free at checkout.</p>' +
        '<a href="/collections/sale/women" class="eg-modal-cta">Pick Your Free Item</a>' +
        '<button class="eg-modal-secondary" data-eg-modal-close>Continue To Checkout</button>' +
        '</div>';

      document.body.appendChild(wrap);
      console.log("[AB25-V2] Modal wrap appended to body");

      // Toggle open via class (display:none → display:block)
      wrap.offsetHeight; // force reflow
      wrap.classList.add("eg-modal-open");

      function closeModal() {
        wrap.classList.remove("eg-modal-open");
        setTimeout(function () {
          if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
          egModalOpen = false;
        }, 300);
      }

      // Close on overlay, close button, or secondary action via data attribute
      wrap.addEventListener("click", function (e) {
        var closeEl = e.target.closest("[data-eg-modal-close]");
        if (closeEl) {
          e.preventDefault();
          e.stopPropagation();
          closeModal();
        }
      }, true);

      // Escape key closes
      var escHandler = function (e) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeModal();
          document.removeEventListener("keydown", escHandler);
        }
      };
      document.addEventListener("keydown", escHandler);
    }

    var egWasAboveThreshold = false; // tracks previous state for edge detection

    function egCheckModalTrigger() {
      console.log("[AB25-V2] egCheckModalTrigger called");
      var thresholds = egGetThresholds();
      var cartValue = egGetCartValue();
      var isAbove = cartValue >= thresholds.gift;
      console.log("[AB25-V2] Threshold check: cartValue=" + cartValue + " >= gift=" + thresholds.gift + " ?", isAbove, "| wasAbove:", egWasAboveThreshold);

      if (isAbove && !egWasAboveThreshold) {
        console.log("[AB25-V2] THRESHOLD CROSSED (below → above)! Will show modal in 500ms");
        egWasAboveThreshold = true;
        setTimeout(function () {
          console.log("[AB25-V2] 500ms elapsed, calling egShowModal()");
          egShowModal();
        }, 500);
      } else if (!isAbove) {
        // Cart dropped below threshold — reset so modal can trigger again on next crossing
        if (egWasAboveThreshold) {
          console.log("[AB25-V2] Cart dropped below threshold, resetting trigger");
        }
        egWasAboveThreshold = false;
      }
    }

    /* ======================== MASTER UPDATE ======================== */

    function egUpdateAll() {
      console.log("[AB25-V2] egUpdateAll() called");
      egUpdateShippingBar();
      egCheckModalTrigger();
    }

    // Debug: expose modal for console testing
    if (debug) {
      window.__AB25_showModal = function () {
        egModalOpen = false;
        egShowModal();
      };
      console.log("[AB25-V2] Debug mode ON. To force-show modal run: __AB25_showModal()");
    }

    /* ======================== AJAX OBSERVER ======================== */

    var origSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
      this.addEventListener("load", function () {
        if (this.responseURL && this.responseURL.includes("/cart")) {
          console.log("[AB25-V2] XHR /cart detected:", this.responseURL);
          setTimeout(egUpdateAll, 300);
        }
      });
      return origSend.apply(this, arguments);
    };

    /* ======================== INIT ======================== */

    function initMiniCart() {
      console.log("[AB25-V2] initMiniCart() called");
      document.body.classList.add("EG-AB25-MINICART");

      var announcement = document.querySelector(".slidecarthq > .announcements");
      if (!announcement) return;

      // Only inject once
      if (document.getElementById("eg-shipping-bar")) return;

      // Shipping + Free Gift Progress Bar only (no gift box bar)
      announcement.insertAdjacentHTML("afterend", '<div class="eg-ab25-wrap">' + egBuildShippingBar() + '</div>');

      // Pre-seed threshold flag: if cart is already at $200+ on page load, don't show modal
      var initialCartValue = egGetCartValue();
      var initThresholds = egGetThresholds();
      if (initialCartValue >= initThresholds.gift) {
        egWasAboveThreshold = true;
        console.log("[AB25-V2] Cart already at/above $" + initThresholds.gift + " on init — modal suppressed until next crossing");
      }

      // Initial UI update
      egUpdateAll();
    }

    /* ======================== BOOT ======================== */

    waitForElement(".slidecarthq > .announcements", initMiniCart, 50, 15000);

  } catch (e) {
    console.log("[AB25-V2] ERROR in Test AB25-V2:", e, e.stack);
  }
})();
