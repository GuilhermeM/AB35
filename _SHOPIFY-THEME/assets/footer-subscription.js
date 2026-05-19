(function () {
  'use strict';

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function init() {
    var form = document.querySelector('[data-footer-subscribe-form]');
    if (!form) return;

    var input = form.querySelector('.footer-sub__input');
    var errorEl = document.querySelector('[data-footer-subscribe-error]');
    var modal = document.querySelector('[data-footer-subscribe-modal]');
    var backdrop = document.querySelector('[data-footer-subscribe-backdrop]');
    var closeBtn = document.querySelector('[data-footer-subscribe-modal-close]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (input.value || '').trim();

      if (!EMAIL_RE.test(email)) {
        showError(errorEl);
        return;
      }

      hideError(errorEl);

      var btn = form.querySelector('.footer-sub__btn');
      setLoading(btn, true);

      submitToKlaviyo(email).then(function (result) {
        setLoading(btn, false);
        if (result.ok) {
          showModal(modal, backdrop);
          input.value = '';
        } else {
          showError(errorEl, result.message);
        }
      });
    });

    input.addEventListener('input', function () {
      if (!errorEl.hidden) hideError(errorEl);
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        hideModal(modal, backdrop);
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        hideModal(modal, backdrop);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && !modal.hidden) {
        hideModal(modal, backdrop);
      }
    });
  }

  function showError(el, message) {
    if (el) {
      if (message) el.textContent = message;
      el.hidden = false;
    }
  }

  function hideError(el) {
    if (el) el.hidden = true;
  }

  function setLoading(btn, loading) {
    if (!btn) return;
    if (!btn.getAttribute('data-original-text')) {
      btn.setAttribute('data-original-text', btn.textContent.trim());
    }
    btn.disabled = loading;
    btn.textContent = loading ? '...' : btn.getAttribute('data-original-text');
  }

  function showModal(modal, backdrop) {
    if (backdrop) backdrop.hidden = false;
    if (modal) {
      modal.hidden = false;
      var closeBtn = modal.querySelector('[data-footer-subscribe-modal-close]');
      if (closeBtn) closeBtn.focus();
    }
  }

  function hideModal(modal, backdrop) {
    if (modal) modal.hidden = true;
    if (backdrop) backdrop.hidden = true;
  }

  function submitToKlaviyo(email) {
    var COMPANY_ID = 'Np2n2K';
    var LIST_ID = 'VfKtb9';

    return fetch('https://a.klaviyo.com/client/subscriptions/?company_id=' + COMPANY_ID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify({
        data: {
          type: 'subscription',
          attributes: {
            custom_source: 'Footer Newsletter',
            profile: {
              data: {
                type: 'profile',
                attributes: { email: email }
              }
            }
          },
          relationships: {
            list: {
              data: { type: 'list', id: LIST_ID }
            }
          }
        }
      })
    }).then(function (response) {
      if (response.ok || response.status === 202) {
        return { ok: true };
      }
      return response.json().then(function (data) {
        return { ok: false, message: data.errors ? data.errors[0].detail : 'Something went wrong. Please try again.' };
      });
    }).catch(function () {
      return { ok: false, message: 'Connection error. Please try again.' };
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
