const JOBBER_BOOKING_URL = '#book'; // Replace with your GetJobber online booking URL.
const PHONE_NUMBER = '5125550123';

document.querySelectorAll('.js-jobber-link').forEach((link) => {
  link.href = JOBBER_BOOKING_URL;
});

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const input = slider.querySelector('input');
  const after = slider.querySelector('.ba-after');
  const update = () => {
    after.style.clipPath = `inset(0 0 0 ${input.value}%)`;
    slider.style.setProperty('--pos', input.value);
  };
  input.addEventListener('input', update);
  update();
});

document.getElementById('year').textContent = new Date().getFullYear();
