document.addEventListener('DOMContentLoaded', () => {
  
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
  });

  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggleBtn.textContent = theme === 'dark' ? '☀️ Chế độ sáng' : '🌙 Chế độ tối';
    localStorage.setItem('theme', theme);
  }

  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  const searchInput = document.getElementById('search-box');
  const cards = document.querySelectorAll('.card-item');

  searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(keyword) ? 'block' : 'none';
    });
  });

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      alert('Cảm ơn bạn! Thông tin đã được gửi thành công.');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
    }
  }, false);

});