// Configuration
const VALID_USERS = {
    "king": "1331",
    "lion": "1221"
  };

  // Theme Management
  function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Authentication System
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (VALID_USERS[username] && VALID_USERS[username] === password) {
      localStorage.setItem('isAuthenticated', 'true');
      document.getElementById('auth-container').remove();
      document.getElementById('content-container').style.display = 'block';
    } else {
      errorElement.style.display = 'flex';
      setTimeout(() => errorElement.style.display = 'none', 2000);
      document.getElementById('password').value = '';
    }
  });

  // Logout Functionality
  function handleLogout() {
    localStorage.removeItem('isAuthenticated');
    window.location.reload();
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    // Set theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // Check authentication
    if (localStorage.getItem('isAuthenticated')) {
      document.getElementById('auth-container').remove();
      document.getElementById('content-container').style.display = 'block';
    }
  });