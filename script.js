document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    if (content) content.classList.toggle('hidden');
    if (icon) {
      icon.classList.toggle('transform');
      icon.classList.toggle('rotate-180');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.btn-primary')?.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('quiz-form')?.classList.remove('hidden');
});

document.getElementById('closeForm')?.addEventListener('click', function () {
  document.getElementById('quiz-form')?.classList.add('hidden');
});

document.getElementById('userForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input, select');
  const data = {};
  inputs.forEach(input => {
    const label = input.previousElementSibling?.innerText || input.name;
    data[label] = input.value;
  });

  const csvHeaders = Object.keys(data).join(',');
  const csvValues = Object.values(data).join(',');
  const csvContent = `${csvHeaders}\n${csvValues}`;
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'careerpath_ai_user_data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  document.getElementById('quiz-form')?.classList.add('hidden');
});




// Mobile Navbar Toggle
document.getElementById('mobile-menu-button')?.addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  const icon = this.querySelector('i');
  
  // Toggle menu visibility
  menu.classList.toggle('hidden');
  
  // Toggle hamburger/close icon
  if (icon) {
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  }
});

// Close mobile menu when clicking on any link (including Start Quiz)
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
    const menuButton = document.getElementById('mobile-menu-button');
    const icon = menuButton?.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    if (content) content.classList.toggle('hidden');
    if (icon) {
      icon.classList.toggle('transform');
      icon.classList.toggle('rotate-180');
    }
  });
});

// Smooth Scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Don't prevent default for quiz button
    if (this.getAttribute('href') !== '#quiz') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Quiz Form Handling - Single handler for both desktop and mobile
document.querySelectorAll('.btn-primary[href="#quiz"]').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('quiz-form').classList.remove('hidden');
  });
});

// Close form handler
document.getElementById('closeForm')?.addEventListener('click', function() {
  document.getElementById('quiz-form').classList.add('hidden');
});

// Form submission handler
document.getElementById('userForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input, select');
  const data = {};
  
  inputs.forEach(input => {
    const label = input.previousElementSibling?.innerText || input.name;
    data[label] = input.value;
  });

  // Create and download CSV
  const csvContent = Object.keys(data).join(',') + '\n' + Object.values(data).join(',');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'careerpath_ai_user_data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Hide form after submission
  document.getElementById('quiz-form').classList.add('hidden');
});
