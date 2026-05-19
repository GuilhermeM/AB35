// AB26 — Product Description Below Add to Bag (toggle + overflow detection)
(function () {
  function init() {
    var blocks = document.querySelectorAll('.ab26-description-block');
    if (!blocks.length) return;

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      var textBox = block.querySelector('.ab26-description-text');
      var toggle = block.querySelector('.ab26-read-more');
      if (!textBox || !toggle || toggle.dataset.ab26Init) continue;

      toggle.dataset.ab26Init = '1';

      // Auto-hide toggle if text doesn't overflow
      if (textBox.scrollHeight <= textBox.clientHeight) {
        toggle.style.display = 'none';
        continue;
      }

      (function (tb, btn) {
        btn.addEventListener('click', function () {
          var isCollapsed = tb.classList.contains('ab26-collapsed');
          if (isCollapsed) {
            tb.classList.remove('ab26-collapsed');
            btn.textContent = 'Read less';
            btn.setAttribute('aria-expanded', 'true');
          } else {
            tb.classList.add('ab26-collapsed');
            btn.textContent = 'Read more';
            btn.setAttribute('aria-expanded', 'false');
          }
        });
      })(textBox, toggle);
    }

    // Hide first easyslider item (description tab) as CSS backup
    var esItem = document.querySelector('.easyslider-item[data-es-handle="slide-item-description"]')
              || document.querySelector('.easyslider-contents .easyslider-item:first-child');
    if (esItem) esItem.style.display = 'none';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      requestAnimationFrame(init);
    });
  } else {
    requestAnimationFrame(init);
  }

  document.addEventListener('shopify:section:load', function () {
    requestAnimationFrame(init);
  });
})();
