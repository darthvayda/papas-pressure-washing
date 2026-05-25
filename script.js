const JOBBER_BOOKING_URL = '#booking'; // Replace with your GetJobber booking URL before launch.
const PHONE_NUMBER = '5125550123';

document.querySelectorAll('[data-jobber-link]').forEach((link) => {
  link.href = JOBBER_BOOKING_URL;
});

document.querySelectorAll('[data-phone-link]').forEach((link) => {
  link.href = `tel:${PHONE_NUMBER}`;
});

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const input = slider.querySelector('.compare-control');

  if (!input) return;

  const updateSlider = () => {
    slider.style.setProperty('--split', `${input.value}%`);
  };

  input.addEventListener('input', updateSlider);
  updateSlider();
});

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
