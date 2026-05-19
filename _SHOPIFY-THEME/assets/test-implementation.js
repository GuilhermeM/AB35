// AB11 start
(function () {
  try {
    var debug = 0;
    var variation_name = "";

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

    function live(selector, event, callback, context) {
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector)))
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    live(".eg-thumbnails .eg-thumbnail", "click", function () {
      document.querySelectorAll(".eg-thumbnails .eg-thumbnail").forEach((thumb) => {
        thumb.classList.remove("active");
      });
      this.classList.add("active");
    });

    function modifyPaymentTermsStyles() {
      const paymentTermsElement = document.querySelector('.ProductMeta >shopify-payment-terms');
      if (paymentTermsElement && paymentTermsElement.shadowRoot) {
        const shadowRoot = paymentTermsElement.shadowRoot;

        const priceElement = shadowRoot.querySelector('#shopify-installments-content');
        if (priceElement) {
          priceElement.setAttribute('style', 'font-size: 10px !important');
        }

        const learnMore = shadowRoot.querySelector('button#shopify-installments-cta');
        if (learnMore) {
          learnMore.setAttribute('style', 'font-size: 10px !important');
        }

        const svgElement = shadowRoot.querySelector('#shopify-installments-content .text-purple-primary svg');
        if (svgElement) {
          svgElement.setAttribute('style', 'width: 49px !important; height: 12px !important');
        }
      } else {
        console.log('Shadow root not found or shopify-payment-terms is not rendered yet');
      }
    }

    function initThumbnails() {
      const gallery = document.querySelector(".Product__Wrapper .Product__Gallery, .Product__Slideshow");
      if (!gallery) return;

      const flickitySlider = gallery.querySelector(".flickity-slider");
      if (!flickitySlider) {
        setTimeout(initThumbnails, 50);
        return;
      }

      const imgs = Array.from(flickitySlider.querySelectorAll("img"));
      if (!imgs.length) {
        setTimeout(initThumbnails, 50);
        return;
      }

      document.querySelector(".eg-thumbnails")?.remove();

      const thumbWrapper = document.createElement("div");
      thumbWrapper.className = "eg-thumbnails";
      thumbWrapper.innerHTML = '<div class="eg-container"></div>';
      const thumbContainer = thumbWrapper.querySelector(".eg-container");

      imgs.forEach((img, index) => {
        let src = img.getAttribute("data-original-src") || img.getAttribute("data-src") || img.src;
        if (src && !src.startsWith("https")) src = "https:" + src;

        const thumb = document.createElement("div");
        thumb.className = "eg-thumbnail";
        thumb.setAttribute("aria-label", `Show image ${index + 1}`);
        thumb.innerHTML = `<img src="${src}" alt="Thumbnail ${index + 1}">`;
        thumbContainer.appendChild(thumb);

        thumb.addEventListener("click", () => {
          const flickityEl = gallery.querySelector(".flickity-enabled");
          if (flickityEl && typeof Flickity !== "undefined") {
            const flkty = Flickity.data(flickityEl);
            if (flkty) {
              flkty.select(index);
            } else {
              const slide = flickitySlider.children[index];
              if (slide) slide.click();
            }
          }
        });
      });

      gallery.parentNode.insertBefore(thumbWrapper, gallery.nextSibling);

      const flickityEl = gallery.querySelector(".flickity-enabled");
      if (flickityEl && typeof Flickity !== "undefined") {
        const flkty = Flickity.data(flickityEl);
        if (flkty) {
          // ✅ function to update active thumbnail
          function updateActiveThumbnail(index) {
            document.querySelectorAll(".eg-thumbnail").forEach((t, i) => {
              t.classList.toggle("active", i === index);
            });

            // scroll active thumbnail into view
            const activeThumb = document.querySelector(".eg-thumbnail.active");
            if (activeThumb) {
              activeThumb.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
            }
          }

          flkty.on("change", (index) => {
            updateActiveThumbnail(index);
          });

          flkty.on("settle", () => {
            updateActiveThumbnail(flkty.selectedIndex);
          });

          flkty.on("select", () => {
            updateActiveThumbnail(flkty.selectedIndex);
          });

          updateActiveThumbnail(0);

          const arrows = document.querySelectorAll(
            ".Product__SlideshowNavArrow--next, .Product__SlideshowNavArrow--previous"
          );

          arrows.forEach((arrow) => {
            arrow.addEventListener("click", function () {
              setTimeout(() => {
                updateActiveThumbnail(flkty.selectedIndex);
              }, 200);
            });
          });
        }
      }
    }

    let tries = 0;
    (function check() {
      if (typeof Flickity === "undefined" && tries < 20) {
        tries++;
        return setTimeout(check, 500);
      }
      initThumbnails();
      if (window && window.screen && window.screen.width < 767) {
        modifyPaymentTermsStyles();
      }
    })();


    if (window && window.screen && window.screen.width < 767) {
      waitForElement(
        ".Product__Wrapper .Product__Gallery img.Image--lazyLoaded",
        () => document.body.classList.add("EG-NMNPPAB11"),
        50,
        15000
      );
    }
  } catch (e) {
    console.log("error:", e);
  }
})();

// AB11 End
// AB12 Start
(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
    /* all Pure helper functions */

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

    function buildFaqFromData() {
      var scriptEls = document.querySelectorAll('[data-product-qa-block]');
      if (!scriptEls || scriptEls.length === 0) return '';
      var items = [];
      for (var s = 0; s < scriptEls.length; s++) {
        try {
          items.push(JSON.parse(scriptEls[s].textContent));
        } catch (e) { }
      }
      if (items.length === 0) return '';
      var baseId = 'es-qa-' + Date.now();
      var html = items.map(function (item, i) {
        var id = baseId + '-' + i;
        var question = (item.question || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        var answer = item.answer || '';
        return (
          '<div class="easyslider-item easyslider-item-static" data-es-marker="slide-dancing-kite-necklace-s2" data-es-handle="slide-shipping-details">' +
          '  <div class="easyslider-header" tabindex="0" aria-expanded="false" aria-labelledby="easyslider-label-' + id + '" aria-controls="easyslider-content-' + id + '" role="button">' +
          '    <div class="easyslider-anchor">' +
          '      <span class="easyslider-header-text" id="easyslider-label-' + id + '">' + question + '</span><span class="easyslider-glyph"></span>' +
          '    </div>' +
          '  </div>' +
          '  <div class="easyslider-content" id="easyslider-content-' + id + '" aria-hidden="true" aria-labelledby="easyslider-label-' + id + '" role="region">' +
          '    <div class="easyslider-content-wrapper">' + answer + '</div>' +
          '  </div>' +
          '</div>'
        );
      }).join('');
      return html + '<div class="eg-minifaq"><p>FAQ</p></div>';
    }

    /* Variation Init */
    function init() {
      document.body.classList.add('EG-NMNPPAB12');
      var targetSel = document.querySelector('.ProductMeta__Description .easyslider-contents');
      if (!targetSel) return;
      if (!targetSel.querySelector('.eg-minifaq')) {
        var faqHtml = buildFaqFromData();
        if (faqHtml) targetSel.insertAdjacentHTML('beforeend', faqHtml);
      }
      var minifaq = document.querySelector('.eg-minifaq');
      if (minifaq) minifaq.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('#customers-ask');
        if (target) {
          let offset;
          if (window.innerWidth <= 768) {
            offset = 100;
          } else {
            offset = 150;
          }
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }

    /* Initialize variation */
    waitForElement('.ProductMeta__Description .easyslider-contents', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
// AB12 End


// AB10 Start
(function () {
  try {
    var debug = 0;
    var variation_name = "";

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector)) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function listener() {
      window.addEventListener("locationchange", function () {
        waitForElement(".CollectionInner", init, 50, 15000);
      });

      history.pushState = ((f) =>
        function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("pushstate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.pushState);

      history.replaceState = ((f) =>
        function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("replacestate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.replaceState);

      window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"));
      });
    }

    function isMobile() {
      return window.screen && window.screen.width < 767;
    }

    if (isMobile()) {
      listener();
    }

    var collectionData = {
      "/collections/necklaces": [
        {
          name: "islamic",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Islamic_Necklaces_c847b68b-8963-431f-a713-6eded76585bb.jpg?v=1756373230",
          link: "https://nominalx.com/collections/womens-necklaces-islamic",
        },
        {
          name: "cultural",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Cultural_Necklaces_d8eaff17-0d00-49e9-8146-23953e8b7471.jpg?v=1756373231",
          link: "https://nominalx.com/collections/womens-necklaces-symbolic",
        },
        {
          name: "chains",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Chains___Women.jpg?v=1756270097",
          link: "https://nominalx.com/collections/chains-women",
        },
      ],
      "/collections/rings": [
        {
          name: "cultural",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Cultural_Rings_be190a7e-1002-45f9-b19a-db5f942fa49e.jpg?v=1756373459",
          link: "https://nominalx.com/collections/womens-rings-cultural",
        },
        {
          name: "statement",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Statement_Rings_d3e620da-7950-4d87-9353-f2aa4e61b3cb.jpg?v=1756373458",
          link: "https://nominalx.com/collections/womens-rings-statement",
        },
        {
          name: "dainty",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Dainty_Rings_0b58e22d-274a-49db-a637-9ec8a8feddff.jpg?v=1756373458",
          link: "https://nominalx.com/collections/womens-rings-dainty",
        },
        {
          name: "islamic",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Women_s_Rings___Islamic_2.jpg?v=1756269385",
          link: "https://nominalx.com/collections/womens-rings-islamic",
        },
      ],
      "/collections/bracelets": [
        {
          name: "cultural",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Cultural_Bracelets.jpg?v=1756373231",
          link: "https://nominalx.com/collections/womens-bracelets-cultural-bracelets",
        },
        {
          name: "cuffs",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Cuffs_Bangles_1.jpg?v=1756270746",
          link: "https://nominalx.com/collections/womens-bracelets-cuffs-bangles",
        },
        {
          name: "islamic",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Islamic_Bracelets_82bae3a2-2a60-4c46-8ce7-7e7b6d80fbfc.jpg?v=1756373230",
          link: "https://nominalx.com/collections/womens-bracelets-islamic",
        },
      ],
      "/collections/earrings": [
        {
          name: "hoops",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Hoop_Earrings.jpg?v=1756270454",
          link: "https://nominalx.com/collections/womens-earrings-hoop",
        },
        {
          name: "cultural",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/cultural_earrings.jpg?v=1756270454",
          link: "https://nominalx.com/collections/womens-earrings-cultural",
        },
        {
          name: "studs",
          image:
            "https://nominalx.com/cdn/shop/products/IMG_2957_800x.jpg?v=1686255786",
          link: "https://nominalx.com/collections/womens-earrings-stud",
        },
      ],
      "/collections/mens-necklaces": [
        {
          name: "cultural",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Men_s_Necklaces___Cultural_3bee6b81-25f2-4e3d-ae30-6ac21c3a5040.jpg?v=1756372914",
          link: "https://nominalx.com/collections/mens-necklaces-cultural",
        },
        {
          name: "chains",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Men_s_Necklaces___Chains.jpg?v=1756372915",
          link: "https://nominalx.com/collections/chains-men",
        },
        {
          name: "islamic",
          image:
            "https://cdn.shopify.com/s/files/1/2556/8900/files/Men_s_Necklaces___Islamic.jpg?v=1756372915",
          link: "https://nominalx.com/collections/mens-necklaces-islamic",
        },
      ],
    };

    var subCollectionMap = {};
    Object.keys(collectionData).forEach((parentKey) => {
      collectionData[parentKey].forEach((item) => {
        var linkPath = new URL(item.link).pathname.replace(/\/$/, "");
        subCollectionMap[linkPath] = parentKey;
      });
    });

    function createBreadcrumb(pathname, parentKey) {
      var path = pathname.replace(/\/$/, "");
      var parent = parentKey.replace(/\/$/, "");
      var crumbs = [];
      let baseLink = "https://nominalx.com/collections";
      if (parentKey) {
        if (
          parentKey.startsWith("/collections/womens") ||
          parentKey.startsWith("/collections/necklaces") ||
          parentKey.startsWith("/collections/rings") ||
          parentKey.startsWith("/collections/bracelets") ||
          parentKey.startsWith("/collections/earrings")
        ) {
          baseLink = "https://nominalx.com/collections/women";
        } else if (parentKey.startsWith("/collections/mens")) {
          baseLink = "https://nominalx.com/collections/men";
        }
      }
      crumbs.push({ name: "Shop All", link: baseLink });
      var isSubPage = subCollectionMap[path] ? true : false;
      if (isSubPage && collectionData[parent]) {
        let parentName = formatName(parent.split("/").pop());
        crumbs.push({ name: parentName, link: parent });
      }
      let currentName;
      if (isSubPage) {
        let match = collectionData[parent].find((item) => {
          return new URL(item.link).pathname.replace(/\/$/, "") === path;
        });
        currentName = match ? match.name : formatName(path.split("/").pop());
      } else {
        currentName = formatName(path.split("/").pop());
      }
      crumbs.push({ name: currentName });
      var html = `<nav class="eg-breadcrumb"><ul>`;
      crumbs.forEach((c) => {
        if (c.link) {
          html += `<li><a href="${c.link}">${c.name}</a></li>`;
        } else {
          html += `<li class="active">${c.name}</li>`;
        }
      });
      html += `</ul></nav>`;
      return html;
    }

    function formatName(slug) {
      let name = slug.replace(/-/g, " ");
      name = name.charAt(0).toUpperCase() + name.slice(1);
      const exceptions = {
        mens: "Men's",
        womens: "Women's",
      };
      Object.keys(exceptions).forEach((key) => {
        let regex = new RegExp("\\b" + key + "\\b", "gi");
        name = name.replace(regex, exceptions[key]);
      });
      return name;
    }

    function clearPrevious() {
      document.body.classList.remove("NMN-AB10", "eg-subPage");
      document.body.classList.add("eg-collection-init");
      const prevFilter = document.querySelector(".eg-collection-filter");
      if (prevFilter) prevFilter.remove();
      const prevBreadcrumb = document.querySelector(".eg-breadcrumb");
      if (prevBreadcrumb) prevBreadcrumb.remove();
      // remove any old swiper instances/styles we injected
      var oldCss = document.querySelector('link[data-eg-swiper="true"]');
      if (oldCss) oldCss.remove();
      var oldJs = document.querySelector('script[data-eg-swiper="true"]');
      if (oldJs) oldJs.remove();
    }

    // inject swiper assets only once
    function injectSwiperAssets(callback) {
      if (window.Swiper) {
        callback();
        return;
      }
      // CSS
      if (!document.querySelector('link[data-eg-swiper="true"]')) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css";
        link.setAttribute("data-eg-swiper", "true");
        document.head.appendChild(link);
      }
      // JS
      if (!document.querySelector('script[data-eg-swiper="true"]')) {
        var script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
        script.async = false;
        script.setAttribute("data-eg-swiper", "true");
        script.onload = function () {
          callback();
        };
        document.body.appendChild(script);
      } else {
        // already present but maybe not ready; wait until Swiper exists
        var check = setInterval(function () {
          if (window.Swiper) {
            clearInterval(check);
            callback();
          }
        }, 50);
      }
    }

    function initSwiperOnWrapper(wrapperSelector) {
      var wrapperEl = document.querySelector(wrapperSelector);
      if (!wrapperEl) return;

      var items = Array.prototype.slice.call(
        wrapperEl.querySelectorAll(".eg-filter-item")
      );
      if (!items || items.length === 0) return;

      var totalWidth = items.reduce(function (acc, it) {
        var w = it.getBoundingClientRect().width || 0;
        return acc + w;
      }, 0);

      var containerWidth = wrapperEl.getBoundingClientRect().width || 0;
      if (!(items.length >= 4 || totalWidth > containerWidth)) {
        return;
      }

      var swiperContainer = document.createElement("div");
      swiperContainer.className = "eg-swiper-container swiper";

      var prevBtn = document.createElement("div");
      prevBtn.className = "eg-swiper-button-prev swiper-button-prev";
      var nextBtn = document.createElement("div");
      nextBtn.className = "eg-swiper-button-next swiper-button-next";

      var swiperWrapper = document.createElement("div");
      swiperWrapper.className = "swiper-wrapper";

      items.forEach(function (it) {
        var slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.appendChild(it);
        swiperWrapper.appendChild(slide);
      });

      swiperContainer.appendChild(swiperWrapper);
      swiperContainer.appendChild(prevBtn);
      swiperContainer.appendChild(nextBtn);

      var parent = wrapperEl.parentElement;
      if (!parent) return;
      parent.replaceChild(swiperContainer, wrapperEl);

      // init swiper after a short delay to ensure layout
      setTimeout(function () {
        try {
          var swiper = new Swiper(".eg-swiper-container", {
            slidesPerView: 3.5,
            navigation: {
              nextEl: ".eg-swiper-button-next",
              prevEl: ".eg-swiper-button-prev",
            }
          });
        } catch (e) {
          if (debug) console.log("swiper init error", e);
        }
      }, 50);
    }

    function init() {
      clearPrevious();
      document.body.classList.add("eg-collection-init");
      document.body.classList.add("eg-NMN-AB10-init");
      var pathname = window.location.pathname.replace(/\/$/, "");
      var parentKey = collectionData[pathname] ? pathname : subCollectionMap[pathname];

      if (parentKey && collectionData[parentKey]) {
        document.body.classList.remove("eg-collection-init");
        document.body.classList.add("NMN-AB10");
        var isSubPage = subCollectionMap[pathname] ? true : false;
        var breadcrumbHTML = createBreadcrumb(pathname, parentKey);
        if (!document.querySelector(".eg-breadcrumb")) {
          var headerTarget = document.querySelector("section .PageHeader");
          if (headerTarget) {
            headerTarget.insertAdjacentHTML("afterbegin", breadcrumbHTML);
          }
        }
        if (isSubPage) {
          document.body.classList.add("eg-subPage");
        }

        var collectionFilters = '<div class="eg-collection-filter"><div class="eg-collectionWrapper">';
        collectionData[parentKey].forEach(function (item) {
          collectionFilters += `
            <a class="eg-filter-item" href="${item.link}">
              <img src="${item.image}" alt="${item.name}">
              <div>${item.name}</div>
            </a>`;
        });
        collectionFilters += "</div></div>";
        var targetMob = document.querySelector("section .PageHeader");
        if (targetMob && !document.querySelector(".eg-collection-filter")) {
          targetMob.insertAdjacentHTML("afterend", collectionFilters);
          injectSwiperAssets(function () {
            initSwiperOnWrapper(".eg-collectionWrapper");
          });
        }
      }
      const headerBtn = document.querySelector("#section-header .Header__Wrapper > button.Header__Icon");

      if (headerBtn && !document.querySelector(".eg-custom-search-icon")) {
        const searchIcon = document.createElement("img");
        searchIcon.src = "https://cdn.shopify.com/s/files/1/2556/8900/files/search.png?v=1761132937";
        searchIcon.alt = "Search";
        searchIcon.className = "eg-custom-search-icon";

        headerBtn.parentNode.insertBefore(searchIcon, headerBtn.nextSibling);

        searchIcon.addEventListener("click", function () {
          document.body.classList.toggle("eg-search-active");
        });
      }
    }

    if (isMobile()) {
      waitForElement(".CollectionInner .ProductListWrapper", init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
// AB10 End

















(function() {
'use strict';




// ============================================================================
// CONFIGURATION
// ============================================================================




const CONFIG = {
  selectors: {
    benefitsOld: '.product_key_features',
    charityCard: '.eg-card#eg-card',
    ctaButton: '.ProductForm__AddToCart.Button--ATC',
    smileBlock: '[id*="smile_io_smile_points_on_product_page"]',
    shippingNotification: '.shipping-notification'
  },
  maxAttempts: 50,
  intervalMs: 100,
  testId: 'ab21-benefits-variant',
  styleId: 'ab21-benefits-styles',
  messageBarId: 'ab21-message-bar'
};




// CDN URLs for new SVG icons
const ICONS = {
  warranty: 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-lifetime-warranty.svg?v=1770234837',
  donates: 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-donates.svg?v=1770234838',
  heart: 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-heart.svg?v=1770234838',
  realGold: 'https://cdn.shopify.com/s/files/1/2556/8900/files/icon-real-gold.svg?v=1770234838'
};




// ============================================================================
// CSS INJECTION
// ============================================================================




function injectStyles() {
  // Check if styles already injected
  if (document.getElementById(CONFIG.styleId)) {
    return;
  }




  const styleElement = document.createElement('style');
  styleElement.id = CONFIG.styleId;
  styleElement.textContent = `
    /* ============================================================================
       AB21 VARIANT STYLES - BENEFITS SECTION
       ============================================================================ */




    /* Hide original benefits section */
    .product_key_features {
      display: none !important;
    }




    /* ============================================================================
       BENEFITS SECTION - MOBILE & DESKTOP
       ============================================================================ */




    .product_key_features_variant {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px 0px 10px;
      gap: 8px;
      width: 100%;
      height: 118px;
      margin: 5px 0;
      box-sizing: border-box;
    }




    .product_key_features_variant .benefits-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 8px;
      width: 100%;
      height: 50px;
      flex: none;
      align-self: stretch;
      flex-grow: 0;
      box-sizing: border-box;
    }




    .product_key_features_variant .benefit-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px;
      gap: 12px;
      height: 50px;
      background: #F8F8F8;
      flex: 1 1 0;
      min-width: 0;
      box-sizing: border-box;
    }




    .product_key_features_variant .benefit-icon {
      width: 32px;
      height: 32px;
      flex: none;
      flex-shrink: 0;
    }




    .product_key_features_variant .benefit-text {
      flex: 1 1 0;
      min-width: 0;
      height: 34px;
      font-family: 'Instrument Sans', sans-serif;
      font-style: normal;
      font-weight: 550;
      font-size: 12px;
      line-height: 140%;
      display: flex;
      align-items: center;
      color: #1C1B1B;
    }


    /* Small screens: reduce benefit text to fit in 2 lines */
    @media (max-width: 390px) {
      .product_key_features_variant .benefit-text {
        font-size: 11px;
      }
    }




    /* ============================================================================
       DESKTOP STYLES (≥ 768px)
       ============================================================================ */




    @media (min-width: 768px) {
      .product_key_features_variant {
        width: 100%;
        height: 152px;
        padding: 0px 0px 10px;
        gap: 8px;
      }




      .product_key_features_variant .benefits-row {
        width: 100%;
        height: 64px;
      }




      .product_key_features_variant .benefit-item {
        width: calc(50% - 4px);
        height: 64px;
        padding: 8px;
        gap: 12px;
        box-sizing: border-box;
      }




      .product_key_features_variant .benefit-icon {
        width: 40px;
        height: 40px;
      }




      .product_key_features_variant .benefit-text {
        flex: 1 1 0;
        width: auto;
        min-width: 0;
        height: auto;
        font-size: 12px;
        line-height: 140%;
      }
    }




    /* ============================================================================
       CHARITY CARD STYLES - MOBILE
       ============================================================================ */




    .eg-card#eg-card {
      display: flex;
      align-items: center;
      width: 100%;
      height: 122.4px;
      background: #F1EFEA;
      border-radius: 8px;
      overflow: hidden;
      margin: 0 0 16px;
      box-sizing: border-box;
    }




    .eg-card#eg-card img {
      width: 120px;
      height: 120.4px;
      object-fit: cover;
      flex-shrink: 0;
    }




    .eg-card#eg-card .eg-card-content {
      padding: 9.395px 12px 18px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
    }




    .eg-card#eg-card .eg-card-content h3 {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 12px;
      line-height: 17px;
      font-weight: 500;
      color: #1C1B1B;
      margin: 0;
    }




    .eg-card#eg-card .eg-card-content p {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 10px;
      line-height: 14px;
      font-weight: 400;
      color: #1C1B1B;
      margin: 0;
    }




    .eg-card#eg-card .eg-card-content a {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: #1C1B1B;
      text-decoration: underline;
    }




    /* ============================================================================
       CHARITY CARD STYLES - DESKTOP (≥ 768px)
       ============================================================================ */




    @media (min-width: 768px) {
      .eg-card#eg-card {
        width: 100%;
        height: 151.85px;
      }




      .eg-card#eg-card img {
        width: 150px;
        height: 150.5px;
      }




      .eg-card#eg-card .eg-card-content {
        padding: 14.45px 24px 22.99px 0px;
        gap: 6px;
      }




      .eg-card#eg-card .eg-card-content h3 {
        font-size: 16px;
        line-height: 22px;
      }




      .eg-card#eg-card .eg-card-content p {
        font-size: 12px;
        line-height: 17px;
      }




      .eg-card#eg-card .eg-card-content a {
        font-size: 14px;
        line-height: 20px;
      }
    }




    /* ============================================================================
       UTILITY CLASSES
       ============================================================================ */




    .ab21-hidden {
      display: none !important;
    }




    /* ============================================================================
       CTA BUTTON REDESIGN - ADD TO CART
       ============================================================================ */




    /* Hide the original button that Bold marks as hidden */
    .ProductForm__AddToCart.Button--ATC.bold_hidden {
      display: none !important;
    }

    /* Style the visible button (whichever one Bold shows) */
    .ProductForm__AddToCart.Button--ATC {
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      padding: 0px 25px !important;
      width: 100% !important;
      height: 48px !important;
      background: #2B872C !important;
      background-color: #2B872C !important;
      border-radius: 3px !important;
      text-transform: none !important;
      letter-spacing: normal !important;
      font-family: 'Instrument Sans', sans-serif !important;
      font-weight: 400 !important;
      font-size: 16px !important;
      line-height: 120% !important;
      color: #FFFFFF !important;
      text-align: center !important;
      margin: 0 !important;
      border: none !important;
      transition: none !important;
    }




    .ProductForm__AddToCart.Button--ATC::before {
      display: none !important;
      content: none !important;
    }




    .ProductForm__AddToCart.Button--ATC:hover {
      background: #2B872C !important;
      background-color: #2B872C !important;
      transform: none !important;
    }




    .ProductForm__AddToCart.Button--ATC span {
      font-family: 'Instrument Sans', sans-serif !important;
      font-weight: 400 !important;
      font-size: 16px !important;
      line-height: 120% !important;
      color: #FFFFFF !important;
      text-transform: none !important;
      letter-spacing: normal !important;
    }




    /* Desktop styles for CTA button */
    @media (min-width: 768px) {
      .ProductForm__AddToCart.Button--ATC {
        width: 100% !important;
      }
    }



  `;




  document.head.appendChild(styleElement);
}




// ============================================================================
// HTML GENERATION
// ============================================================================




function createNewBenefitsHTML() {
  return `
    <div class="product_key_features_variant" id="${CONFIG.testId}">
      <div class="benefits-row benefits-row-1">
        <div class="benefit-item benefit-warranty">
          <img src="${ICONS.warranty}"
               alt="Lifetime Warranty"
               class="benefit-icon"
               loading="lazy">
          <span class="benefit-text">Lifetime Warranty on All Jewelry</span>
        </div>
        <div class="benefit-item benefit-charity">
          <img src="${ICONS.donates}"
               alt="Charity Donation"
               class="benefit-icon"
               loading="lazy">
          <span class="benefit-text">Every Order Donates to Charity</span>
        </div>
      </div>
      <div class="benefits-row benefits-row-2">
        <div class="benefit-item benefit-handmade">
          <img src="${ICONS.heart}"
               alt="Handmade"
               class="benefit-icon"
               loading="lazy">
          <span class="benefit-text">Each custom piece is handmade</span>
        </div>
        <div class="benefit-item benefit-gold">
          <img src="${ICONS.realGold}"
               alt="Real Gold"
               class="benefit-icon"
               loading="lazy">
          <span class="benefit-text">Real Waterproof Gold, Always.</span>
        </div>
      </div>
    </div>
  `;
}




// ============================================================================
// CTA BUTTON MODIFICATION
// ============================================================================




function modifyCTAButton() {
  try {
    // Find all Add to Cart buttons (excluding clones)
    const ctaButtons = document.querySelectorAll(CONFIG.selectors.ctaButton + ':not(.bold_clone)');


    if (ctaButtons.length === 0) {
      console.warn('AB21: CTA button not found');
      return false;
    }


    ctaButtons.forEach(button => {
      // Skip if already modified
      if (button.classList.contains('ab21-cta-modified')) return;


      // Change button text from "Add to Bag" to "Add To Cart"
      const buttonSpan = button.querySelector('span');
      if (buttonSpan) {
        const currentText = buttonSpan.textContent.trim();
        if (currentText === 'Add to Bag' || currentText === 'ADD TO BAG') {
          buttonSpan.textContent = 'Add To Cart';
        }
      }


      // Add marker class to track modification
      button.classList.add('ab21-cta-modified');
    });


    // Also update text on any bold_clone buttons that already exist
    const cloneButtons = document.querySelectorAll(CONFIG.selectors.ctaButton + '.bold_clone');
    cloneButtons.forEach(button => {
      const buttonSpan = button.querySelector('span');
      if (buttonSpan) {
        const currentText = buttonSpan.textContent.trim();
        if (currentText === 'Add to Bag' || currentText === 'ADD TO BAG') {
          buttonSpan.textContent = 'Add To Cart';
        }
      }
    });


    console.log('AB21: CTA button successfully modified');
    return true;


  } catch (error) {
    console.error('AB21: Error modifying CTA button', error);
    return false;
  }
}




// ============================================================================
// DUPLICATE BUTTON PREVENTION
// ============================================================================




function preventDuplicateButtons() {
  // Only update button text — let Bold manage display/visibility
  function updateText() {
    document.querySelectorAll(CONFIG.selectors.ctaButton).forEach(btn => {
      const span = btn.querySelector('span');
      if (span) {
        const text = span.textContent.trim();
        if (text === 'Add to Bag' || text === 'ADD TO BAG') {
          span.textContent = 'Add To Cart';
        }
      }
    });
  }

  // Run immediately
  updateText();

  // Watch for Bold clone buttons appearing and update their text
  const cloneObserver = new MutationObserver(() => {
    updateText();
  });

  cloneObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Stop after 10 seconds
  setTimeout(() => {
    cloneObserver.disconnect();
  }, 10000);
}







// ============================================================================
// DOM MANIPULATION - BENEFITS SECTION
// ============================================================================




function replaceElements() {
  try {
    // Check if variant already applied (prevent duplicate execution)
    if (document.getElementById(CONFIG.testId)) {
      console.log('AB21: Variant already exists, skipping');
      return false;
    }




    // Find target elements
    const benefitsOld = document.querySelector(CONFIG.selectors.benefitsOld);
    const charityCard = document.querySelector(CONFIG.selectors.charityCard);




    // Validate elements exist
    if (!benefitsOld || !charityCard) {
      console.warn('AB21: Required elements not found', {
        benefitsOld: !!benefitsOld,
        charityCard: !!charityCard
      });
      return false;
    }




    // Get the parent container (should be the same parent for both elements)
    const benefitsParent = benefitsOld.parentElement;
    if (!benefitsParent) {
      console.warn('AB21: Benefits parent not found');
      return false;
    }




    // Remove any existing duplicate benefits FIRST (safety check)
    const existingDuplicates = document.querySelectorAll('.product_key_features_variant');
    existingDuplicates.forEach(duplicate => {
      duplicate.remove();
    });




    // Hide old benefits section to prevent duplication
    benefitsOld.style.display = 'none';
    benefitsOld.classList.add('ab21-hidden');




    // Create new benefits element
    const newBenefitsWrapper = document.createElement('div');
    newBenefitsWrapper.innerHTML = createNewBenefitsHTML();
    const newBenefits = newBenefitsWrapper.firstElementChild;




    // Strategy: Place new benefits where old benefits was, then charity card after benefits
    // This ensures order: new benefits → charity card




    // Insert new benefits at the old benefits position
    benefitsParent.insertBefore(newBenefits, benefitsOld);




    // Insert charity card after new benefits
    benefitsParent.insertBefore(charityCard, newBenefits.nextSibling);




    // Log success
    console.log('AB21: Variant successfully applied - benefits first, charity card after');
    return true;




  } catch (error) {
    console.error('AB21: Error during DOM manipulation', error);
    return false;
  }
}




// ============================================================================
// ELEMENT DETECTION & POLLING
// ============================================================================




function waitForElements() {
  let attempts = 0;




  const interval = setInterval(() => {
    attempts++;




    const benefitsOld = document.querySelector(CONFIG.selectors.benefitsOld);
    const charityCard = document.querySelector(CONFIG.selectors.charityCard);
    const ctaButton = document.querySelector(CONFIG.selectors.ctaButton);
    const shippingEl = document.querySelector(CONFIG.selectors.shippingNotification);
    const smileBlock = document.querySelector(CONFIG.selectors.smileBlock);




    // Check if both benefits elements are present
    if (benefitsOld && charityCard) {
      clearInterval(interval);
      replaceElements();


      // Also modify CTA button if found
      if (ctaButton) {
        modifyCTAButton();
      }


      // Also create message bar if shipping or points elements found
      if ((shippingEl || smileBlock) && !document.getElementById(CONFIG.messageBarId)) {
        modifyMessageBar();
      }
      return;
    }




    // Max attempts reached
    if (attempts >= CONFIG.maxAttempts) {
      clearInterval(interval);
      console.warn('AB21: Elements not found after max attempts', {
        attempts: attempts,
        timeout: CONFIG.maxAttempts * CONFIG.intervalMs + 'ms',
        benefitsOldFound: !!benefitsOld,
        charityCardFound: !!charityCard,
        ctaButtonFound: !!ctaButton
      });


      // Try to modify CTA button even if benefits not found
      if (ctaButton) {
        modifyCTAButton();
      }


      // Try to create message bar even if benefits not found
      if ((shippingEl || smileBlock) && !document.getElementById(CONFIG.messageBarId)) {
        modifyMessageBar();
      }
      return;
    }
  }, CONFIG.intervalMs);
}




// ============================================================================
// MUTATION OBSERVER FALLBACK
// ============================================================================




function setupMutationObserver() {
  // Fallback for dynamic content loading
  const observer = new MutationObserver((mutations) => {
    const benefitsOld = document.querySelector(CONFIG.selectors.benefitsOld);
    const charityCard = document.querySelector(CONFIG.selectors.charityCard);
    const variantExists = document.getElementById(CONFIG.testId);
    const ctaButton = document.querySelector(CONFIG.selectors.ctaButton);
    const messageBarExists = document.getElementById(CONFIG.messageBarId);
    const shippingEl = document.querySelector(CONFIG.selectors.shippingNotification);
    const smileBlock = document.querySelector(CONFIG.selectors.smileBlock);




    if (benefitsOld && charityCard && !variantExists) {
      replaceElements();


      // Also modify CTA button if found
      if (ctaButton && !ctaButton.classList.contains('ab21-cta-modified')) {
        modifyCTAButton();
      }
    } else if (ctaButton && !ctaButton.classList.contains('ab21-cta-modified')) {
      // If benefits already done but CTA button just appeared
      modifyCTAButton();
    }


    // Create message bar when shipping or points elements appear
    if ((shippingEl || smileBlock) && !messageBarExists) {
      modifyMessageBar();
    }
  });




  observer.observe(document.body, {
    childList: true,
    subtree: true
  });




  // Stop observing after 10 seconds
  setTimeout(() => {
    observer.disconnect();
  }, 10000);
}




// ============================================================================
// INITIALIZATION
// ============================================================================




function init() {
  // Always inject CSS (hides originals + styles message bar)
  injectStyles();


  // Check if benefits variant already applied
  const variantAlreadyApplied = document.getElementById(CONFIG.testId);
  if (variantAlreadyApplied) {
    console.log('AB21: Variant already applied, skipping benefits/CTA init');
  }


  // Check document ready state
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (!variantAlreadyApplied) {
        waitForElements();
        preventDuplicateButtons();
      }
      setupMutationObserver();
      // Also try message bar immediately in case elements are already there
      if (!document.getElementById(CONFIG.messageBarId)) {
        modifyMessageBar();
      }
    });
  } else {
    if (!variantAlreadyApplied) {
      waitForElements();
      preventDuplicateButtons();
    }
    setupMutationObserver();
    // Also try message bar immediately in case elements are already there
    if (!document.getElementById(CONFIG.messageBarId)) {
      modifyMessageBar();
    }
  }
}




// ============================================================================
// EXECUTE
// ============================================================================




init();




})();