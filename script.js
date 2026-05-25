document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.city-tab');
  const panels = document.querySelectorAll('.city-artists');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const city = tab.dataset.city;

      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panels
      panels.forEach(p => p.classList.remove('active'));
      const target = document.getElementById(`artists-${city}`);
      if (target) target.classList.add('active');

      // Smooth scroll to artists section
      document.querySelector('.artists-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
