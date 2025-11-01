// Theme toggle with persistence
(function () {
  const switchEl = document.getElementById('switch');
  const LS_KEY = 'site-theme-light';

  // initialize from localStorage
  const isLight = localStorage.getItem(LS_KEY) === '1';
  if (isLight) {
    document.body.classList.add('light-mode');
    if (switchEl) switchEl.checked = true;
  } else {
    document.body.classList.remove('light-mode');
    if (switchEl) switchEl.checked = false;
  }

  if (switchEl) {
    switchEl.addEventListener('change', function () {
      const on = switchEl.checked;
      document.body.classList.toggle('light-mode', on);
      localStorage.setItem(LS_KEY, on ? '1' : '0');
    });
  }
})();
