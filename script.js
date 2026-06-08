const JOBBER_BOOKING_URL = '#booking'; // Replace with your GetJobber booking URL before launch.
const PHONE_NUMBER = '7372544025';

document.querySelectorAll('[data-jobber-link]').forEach((link) => {
  link.href = JOBBER_BOOKING_URL;
});

document.querySelectorAll('[data-phone-link]').forEach((link) => {
  link.href = `tel:${PHONE_NUMBER}`;
});

const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.querySelector('[data-menu-close]');
const menuBackdrop = document.querySelector('[data-menu-backdrop]');

if (menuToggle && mobileMenu && menuClose && menuBackdrop) {
  const openMenu = () => {
    mobileMenu.hidden = false;
    menuBackdrop.hidden = false;
    document.body.classList.add('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close mobile menu');
  };

  const closeMenu = () => {
    document.body.classList.remove('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open mobile menu');

    window.setTimeout(() => {
      if (!document.body.classList.contains('mobile-menu-open')) {
        mobileMenu.hidden = true;
        menuBackdrop.hidden = true;
      }
    }, 220);
  };

  menuToggle.addEventListener('click', () => {
    if (document.body.classList.contains('mobile-menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuClose.addEventListener('click', closeMenu);
  menuBackdrop.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!document.body.classList.contains('mobile-menu-open')) return;
    if (mobileMenu.contains(event.target) || menuToggle.contains(event.target)) return;

    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('mobile-menu-open')) {
      closeMenu();
    }
  });
}

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const input = slider.querySelector('.compare-control');

  if (!input) return;

  const updateSlider = () => {
    slider.style.setProperty('--split', `${input.value}%`);
  };

  input.addEventListener('input', updateSlider);
  updateSlider();
});

const formSuccess = document.querySelector('[data-form-success]');
const estimateCard = document.querySelector('[data-estimate-card]');

if (formSuccess && estimateCard && new URLSearchParams(window.location.search).get('submitted') === 'true') {
  formSuccess.hidden = false;
  estimateCard.hidden = true;
  formSuccess.scrollIntoView({ block: 'center' });
}

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
