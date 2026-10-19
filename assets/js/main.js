/* AI HUMANS — Site behaviors: FAQ accordion, catalog filters, contact form, year. */
(function () {
  'use strict';

  /* ---------------------------------------------------------------
     CONFIG — edit these values (see README > Editing content)
     --------------------------------------------------------------- */
  var SITE_CONFIG = {
    // Address that receives contact-form messages via the visitor's email app.
    // REPLACE with the real inbox before publishing.
    contactEmail: 'hello@theaihumans.com'
  };

  /* Current year in footer */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Contact email links */
  document.querySelectorAll('[data-contact-email]').forEach(function (el) {
    el.textContent = SITE_CONFIG.contactEmail;
    el.setAttribute('href', 'mailto:' + SITE_CONFIG.contactEmail);
  });

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll('.faq-item').forEach(function (item, i) {
    var btn = item.querySelector('.faq-q');
    var panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    var id = panel.id || ('faq-panel-' + i + '-' + Math.random().toString(36).slice(2, 7));
    panel.id = id;
    btn.setAttribute('aria-controls', id);
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', btn.id || (btn.id = id + '-btn'));
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      item.classList.toggle('open', !open);
    });
  });

  /* ---------------- Catalog filters ---------------- */
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var items = document.querySelectorAll('[data-category]');
    var refreshST = function () { if (window.ScrollTrigger) window.ScrollTrigger.refresh(); };
    var status = document.querySelector('[data-filter-status]');
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      filterBar.querySelectorAll('[data-filter]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      var shown = 0;
      items.forEach(function (it) {
        var cats = it.getAttribute('data-category').split(' ');
        var match = f === 'all' || cats.indexOf(f) !== -1;
        it.hidden = !match;
        if (match) { shown++; it.style.opacity = ''; it.style.transform = ''; }
      });
      refreshST();
      if (status) status.textContent = shown + (shown === 1 ? ' item' : ' items') + ' shown';
    });
  }

  /* ---------------- Contact form ----------------
     No backend is connected. On submit we validate, then open the visitor's
     email client with a pre-filled message. We never show a fake "sent" state. */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var statusEl = form.querySelector('.form-status');

    var setError = function (field, msg) {
      var input = form.querySelector('[name="' + field + '"]');
      var err = form.querySelector('[data-error-for="' + field + '"]');
      if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (err) err.textContent = msg || '';
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var email = (data.get('email') || '').toString().trim();
      var company = (data.get('company') || '').toString().trim();
      var interest = (data.get('interest') || '').toString().trim();
      var message = (data.get('message') || '').toString().trim();

      var ok = true;
      setError('name', name ? '' : 'Please enter your name.');
      if (!name) ok = false;
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setError('email', emailOk ? '' : 'Please enter a valid email address.');
      if (!emailOk) ok = false;
      setError('message', message.length >= 10 ? '' : 'Please tell us a little more (at least 10 characters).');
      if (message.length < 10) ok = false;

      if (!ok) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var subject = 'Project inquiry' + (interest ? ' — ' + interest : '') + (company ? ' (' + company + ')' : '');
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        (company ? 'Company: ' + company + '\n' : '') +
        (interest ? 'Interest: ' + interest + '\n' : '') +
        '\n' + message + '\n';

      var href = 'mailto:' + SITE_CONFIG.contactEmail +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = href;
      if (statusEl) {
        statusEl.textContent = 'Your email app should open with this message pre-filled. ' +
          'The message is only sent once you press Send there. If nothing opened, write to ' +
          SITE_CONFIG.contactEmail + '.';
      }
    });
  }

  /* Pre-select interest from ?interest= query param (e.g. links from pillar pages) */
  var params = new URLSearchParams(location.search);
  var preset = params.get('interest');
  var sel = document.querySelector('select[name="interest"]');
  if (preset && sel) {
    Array.prototype.forEach.call(sel.options, function (o) {
      if (o.value === preset) sel.value = preset;
    });
  }
})();
