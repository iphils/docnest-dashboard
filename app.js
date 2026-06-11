// Interactive behaviour shared across pages: the WhatsApp booking-request
// form, the photo-gallery lightbox, and the footer year.
// Page content and SEO tags live statically in the HTML for SEO/social crawlers.
(function () {

  // Today's date in the visitor's local timezone, as YYYY-MM-DD.
  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function formatBookingDate(value) {
    var date = new Date(value + 'T00:00:00');
    if (isNaN(date)) return value;
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // Renders the booking-request form into `container` and wires up the
  // WhatsApp submit. `opts.fieldClass` / `opts.buttonClass` let each page
  // keep its own styling.
  window.initBookingForm = function (container, opts) {
    opts = opts || {};
    var fieldClass = opts.fieldClass || 'booking-field';
    var buttonClass = opts.buttonClass || 'whatsapp-btn';
    var wa = siteConfig.contact.whatsapp;
    var inputs = [];
    var dateInputs = [];

    wa.fields.forEach(function (field) {
      var label = document.createElement('label');
      label.className = fieldClass;
      var span = document.createElement('span');
      span.textContent = field.label + (field.required ? ' *' : '');
      var input = document.createElement('input');
      input.type = field.inputType;
      if (field.required) input.required = true;
      if (field.inputType === 'date') {
        input.min = todayISO(); // no booking requests for past dates
        dateInputs.push(input);
      }
      label.appendChild(span);
      label.appendChild(input);
      container.appendChild(label);
      inputs.push(input);
    });

    // Keep the end date from being set before the start date.
    if (dateInputs.length === 2) {
      dateInputs[0].addEventListener('change', function () {
        dateInputs[1].min = dateInputs[0].value || todayISO();
        if (dateInputs[1].value && dateInputs[1].value < dateInputs[1].min) {
          dateInputs[1].value = '';
        }
      });
    }

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = buttonClass;
    btn.textContent = wa.display;
    container.appendChild(btn);

    btn.addEventListener('click', function () {
      var message = wa.text;
      for (var i = 0; i < wa.fields.length; i++) {
        var field = wa.fields[i];
        var input = inputs[i];
        if (!input.checkValidity()) {
          input.focus();
          input.reportValidity();
          return;
        }
        var value = input.value.trim();
        var display = field.inputType === 'date' && value ? formatBookingDate(value) : value;
        message = message.split(field.placeholder).join(display);
      }
      window.open('https://wa.me/' + wa.number + '?text=' + encodeURIComponent(message), '_blank');
    });
  };

  // Click-to-enlarge lightbox for the photo gallery. Falls back to plain
  // image links when JS is unavailable.
  function initLightbox() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.gallery-grid a'));
    if (!links.length) return;

    var current = 0;
    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.hidden = true;
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<button class="lightbox-prev" aria-label="Previous photo">&#8249;</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lightbox-next" aria-label="Next photo">&#8250;</button>';
    document.body.appendChild(overlay);

    var img = overlay.querySelector('img');
    var caption = overlay.querySelector('figcaption');

    function show(i) {
      current = (i + links.length) % links.length;
      var thumb = links[current].querySelector('img');
      img.src = links[current].href;
      img.alt = thumb ? thumb.alt : '';
      caption.textContent = img.alt;
    }

    function open(i) {
      show(i);
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.hidden = true;
      document.body.style.overflow = '';
    }

    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        open(i);
      });
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.className === 'lightbox-close') close();
    });
    overlay.querySelector('.lightbox-prev').addEventListener('click', function () { show(current - 1); });
    overlay.querySelector('.lightbox-next').addEventListener('click', function () { show(current + 1); });
    document.addEventListener('keydown', function (e) {
      if (overlay.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var bookingForm = document.getElementById('booking-form');
    if (bookingForm) initBookingForm(bookingForm);

    initLightbox();

    var year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
