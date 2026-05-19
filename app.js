// Main application logic - Renders content from config.js
document.addEventListener('DOMContentLoaded', function() {

  // Render SEO meta tags
  renderSEOMetaTags();

  // Render page header
  renderPageHeader();

  // Render hero section
  renderHero();

  // Render features grid
  renderFeatures();

  // Render pricing plans
  renderPricingPlans();

  // Render facility details
  renderFacilityDetails();

  // Render operating hours and guidelines
  renderOperatingHours();
  renderGuidelines();

  // Render additional services
  renderAdditionalServices();

  // Render photo gallery
  renderGallery();

  // Render contact section
  renderContact();
});

function renderSEOMetaTags() {
  const head = document.head;

  // Update page title
  document.title = siteConfig.metadata.title;

  // Update existing meta description
  document.querySelector('meta[name="description"]').setAttribute('content', siteConfig.metadata.description);

  // Create helper function to add meta tag
  function addMetaTag(attributes) {
    const meta = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      meta.setAttribute(key, value);
    });
    head.appendChild(meta);
  }

  // Add basic meta tags
  addMetaTag({ name: 'keywords', content: siteConfig.metadata.keywords });
  addMetaTag({ name: 'author', content: siteConfig.metadata.author });
  addMetaTag({ name: 'robots', content: siteConfig.metadata.robots });

  // Add canonical link
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = siteConfig.metadata.canonical;
  head.appendChild(canonical);

  // Add Open Graph meta tags
  addMetaTag({ property: 'og:type', content: siteConfig.seo.og.type });
  addMetaTag({ property: 'og:url', content: siteConfig.seo.og.url });
  addMetaTag({ property: 'og:title', content: siteConfig.seo.og.title });
  addMetaTag({ property: 'og:description', content: siteConfig.seo.og.description });
  addMetaTag({ property: 'og:image', content: siteConfig.seo.og.image });
  addMetaTag({ property: 'og:locale', content: siteConfig.seo.og.locale });

  // Add Twitter Card meta tags
  addMetaTag({ property: 'twitter:card', content: siteConfig.seo.twitter.card });
  addMetaTag({ property: 'twitter:url', content: siteConfig.seo.twitter.url });
  addMetaTag({ property: 'twitter:title', content: siteConfig.seo.twitter.title });
  addMetaTag({ property: 'twitter:description', content: siteConfig.seo.twitter.description });
  addMetaTag({ property: 'twitter:image', content: siteConfig.seo.twitter.image });

  // Add structured data (JSON-LD)
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(siteConfig.structuredData);
  head.appendChild(script);
}

function renderPageHeader() {
  const headerDiv = document.getElementById('page-header');
  headerDiv.innerHTML = `
    <h1>${siteConfig.metadata.pageHeading}</h1>
    <p>${siteConfig.metadata.pageSubheading}</p>
  `;
}

function renderHero() {
  const heroDiv = document.getElementById('hero-section');
  heroDiv.innerHTML = `
    <img src="${siteConfig.hero.image}" alt="${siteConfig.hero.alt}" class="hero-image">
  `;
}

function renderFeatures() {
  const featuresGrid = document.getElementById('features-grid');
  featuresGrid.innerHTML = siteConfig.features.map(feature => `
    <div class="feature-card">
      <div class="feature-icon ${feature.iconColor}">
        ${feature.icon}
      </div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `).join('');
}

function renderPricingPlans() {
  const pricingGrid = document.getElementById('pricing-grid');
  pricingGrid.innerHTML = siteConfig.pricingPlans.map(plan => `
    <div class="pricing-card ${plan.highlighted ? 'highlighted' : ''}">
      <img src="${plan.image}" alt="${plan.title}" class="pricing-image">
      <div class="pricing-content">
        <span class="pricing-badge ${plan.badge.color}">${plan.badge.text}</span>
        <h3>${plan.title}</h3>
        <div class="pricing-price">${plan.price}<span style="font-size: 1rem; color: #718096;"> ${plan.period}</span></div>
        <p class="pricing-description">${plan.description}</p>
        <ul class="pricing-features">
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderFacilityDetails() {
  const facilityGrid = document.getElementById('facility-grid');
  facilityGrid.innerHTML = siteConfig.facilityDetails.map(facility => `
    <div class="info-section">
      <h3>${facility.title}</h3>
      <p>${facility.description}</p>
      <div class="info-images">
        ${facility.images.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('')}
      </div>
    </div>
  `).join('');
}

function renderOperatingHours() {
  const scheduleDiv = document.getElementById('operating-hours');
  scheduleDiv.innerHTML = `
    <h3>Operating Hours</h3>
    ${siteConfig.operatingHours.map(schedule => {
      const badgeStyle = schedule.badge.color === 'red'
        ? 'background: #fed7d7; color: #c53030;'
        : '';
      return `
        <div class="schedule-item">
          <span>${schedule.days}</span>
          <span class="schedule-badge" style="${badgeStyle}">${schedule.badge.text}</span>
        </div>
      `;
    }).join('')}
  `;
}

function renderGuidelines() {
  const guidelinesDiv = document.getElementById('guidelines-list');
  guidelinesDiv.innerHTML = `
    <h3>Study Room Guidelines</h3>
    ${siteConfig.guidelines.map(guideline => `
      <div class="guideline-item">
        <div>
          <div class="guideline-label">${guideline.label}</div>
          <div class="guideline-description">${guideline.description}</div>
        </div>
      </div>
    `).join('')}
  `;
}

function renderAdditionalServices() {
  const servicesGrid = document.getElementById('additional-services-grid');
  servicesGrid.innerHTML = siteConfig.additionalServices.map(service => `
    <div class="feature-card">
      <div class="feature-icon ${service.iconColor}">
        ${service.icon}
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

function renderGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  galleryGrid.innerHTML = siteConfig.gallery.map(image => `
    <img src="${image.src}" alt="${image.alt}">
  `).join('');
}

function renderContact() {
  const contactSection = document.getElementById('contact-section');
  const wa = siteConfig.contact.whatsapp;

  const fieldsHtml = wa.fields.map((field, i) => `
    <label class="booking-field">
      <span>${field.label}${field.required ? ' *' : ''}</span>
      <input type="${field.inputType}" id="booking-field-${i}" ${field.required ? 'required' : ''}>
    </label>
  `).join('');

  contactSection.innerHTML = `
    <h2>${siteConfig.contact.heading}</h2>
    <p>${siteConfig.contact.subheading}</p>

    <div class="contact-info">
      <div class="contact-item">
        <div class="contact-label">Request a Booking</div>
        <div class="booking-form">
          ${fieldsHtml}
          <button type="button" class="whatsapp-btn" id="booking-submit">
            ${wa.display}
          </button>
        </div>
      </div>

      <div class="contact-item">
        <div class="contact-label">Visit Us</div>
        <div class="contact-value">
          ${siteConfig.contact.address.line1}
        </div>
      </div>
    </div>
  `;

  document.getElementById('booking-submit').addEventListener('click', () => {
    let message = wa.text;
    for (let i = 0; i < wa.fields.length; i++) {
      const field = wa.fields[i];
      const input = document.getElementById(`booking-field-${i}`);
      const value = input.value.trim();
      if (field.required && !value) {
        input.focus();
        input.reportValidity();
        return;
      }
      const display = field.inputType === 'date' && value ? formatBookingDate(value) : value;
      message = message.split(field.placeholder).join(display);
    }
    const link = `https://wa.me/${wa.number}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  });
}

function formatBookingDate(value) {
  const date = new Date(value + 'T00:00:00');
  if (isNaN(date)) return value;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
