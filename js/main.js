// Smooth scrolling
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation + fake submit
const form = document.getElementById('contactForm');
const alert = document.getElementById('formAlert');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    alert.innerHTML = '<div class="alert alert-danger">Please fill all fields.</div>';
    return;
  }
  alert.innerHTML = '<div class="alert alert-success">Thanks! Message sent.</div>';
  form.reset();
});
