((document, window) => {
  const okeRenderedHandler = function(e) {
    if (e.detail.widget === 'reviews-widget') {
      setupCollectionControls();
    }
  };
  document.addEventListener('oke-rendered', okeRenderedHandler);

  if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
      value: function(search, rawPos) {
        var pos = rawPos > 0 ? rawPos|0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  }

  function setupCollectionControls() {
    const snippetEl = document.querySelector('#orc-widget-snippet');
    const controlEl = document.querySelector('#orc-collection-control');
    const collectionRadioElements = Array.prototype.slice.call(
      document.querySelectorAll('.js-orc-collectionRadio')
    );
    controlEl.style.display = 'block';

    // 🔹 Remove box-shadow & border on first load
    const firstInput = document.querySelector(
      ".orc-allReviewsCollections .orc-collectionControls-item-input"
    );
    if (firstInput) {
      const firstLabel = firstInput.nextElementSibling;
      if (
        firstLabel &&
        firstLabel.classList.contains("orc-collectionControls-item-label")
      ) {
        firstLabel.style.boxShadow = "none";
        firstLabel.style.border = "none";
      }
    }

    collectionRadioElements.forEach(function(radioElement) {
      radioElement.addEventListener("click", function() {
        if (radioElement.value) {
          if (radioElement.value.toLowerCase().startsWith("shopify-")) {
            snippetEl.removeAttribute("data-oke-reviews-group-id");
            window.okeWidgetApi.setProduct(snippetEl, radioElement.value);
          } else {
            snippetEl.removeAttribute("data-oke-reviews-product-id");
            window.okeWidgetApi.setGroup(snippetEl, radioElement.value);
          }

          collectionRadioElements.forEach(function(element) {
            element.classList.remove(
              "orc-collectionControls-item-input--checked"
            );
          });
          radioElement.classList.add(
            "orc-collectionControls-item-input--checked"
          );
        }

        // 🔹 When user clicks, add box-shadow & border back
        const label = radioElement.nextElementSibling;
        if (
          label &&
          label.classList.contains("orc-collectionControls-item-label")
        ) {
          label.style.boxShadow = ""; // reset to stylesheet default
          label.style.border = "";    // reset to stylesheet default
        }
      });
    });

    document.removeEventListener("oke-rendered", okeRenderedHandler);
  }
})(document, window);
