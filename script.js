// Main App Controller
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initFAQToggle();
  initSmoothScrolling();
  initQuizForm();
});

// Mobile Menu Functionality
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', function() {
    const isHidden = mobileMenu.classList.toggle('hidden');
    toggleMenuIcon(this, isHidden);
  });

  // Close menu when clicking links
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggleMenuIcon(menuButton, true);
    });
  });
}

function toggleMenuIcon(button, isHidden) {
  const icon = button?.querySelector('i');
  if (icon) {
    icon.classList.toggle('fa-bars', isHidden);
    icon.classList.toggle('fa-times', !isHidden);
  }
}

// FAQ Toggle Functionality
function initFAQToggle() {
  document.querySelectorAll('.faq button').forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      if (content) content.classList.toggle('hidden');
      if (icon) {
        icon.classList.toggle('transform');
        icon.classList.toggle('rotate-180');
      }
    });
  });
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#quiz') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Quiz Form Handling
function initQuizForm() {
  // Open form handlers
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
  document.getElementById('userForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = getFormData(this);
    
    try {
      // Show loading state
      toggleFormLoading(true);
      
      // Choose one submission method:
      // 1. For local CSV download:
      downloadCSV(formData);
      
      // OR 2. For Google Sheets submission:
      // await submitToGoogleSheets(formData);
      
      // Success actions
      this.reset();
      document.getElementById('quiz-form').classList.add('hidden');
      showAlert('Thank you for your submission!', 'success');
      
    } catch (error) {
      console.error('Submission error:', error);
      showAlert('Error submitting form. Please try again.', 'error');
    } finally {
      toggleFormLoading(false);
    }
  });
}

// Helper Functions
function getFormData(form) {
  const inputs = form.querySelectorAll('input, select');
  const data = {};
  
  inputs.forEach(input => {
    const label = input.previousElementSibling?.innerText || input.name;
    data[label] = input.value;
  });
  
  return data;
}

function downloadCSV(data) {
  const csvContent = Object.keys(data).join(',') + '\n' + Object.values(data).join(',');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'careerpath_ai_user_data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function submitToGoogleSheets(data) {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5NqdFMeVSzIR2WW27DJWNnPGZUXJHeY8s63RfB_ItT9zvfdnbhxZRYbpIUaVXp0QQVw/exec'; // Replace with your URL
  const SECRET_KEY = 'Muzans'; // Replace with your key
  
  const response = await fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, secret: SECRET_KEY })
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit to Google Sheets');
  }
  
  return await response.json();
}

function toggleFormLoading(isLoading) {
  const submitBtn = document.querySelector('#userForm button[type="submit"]');
  if (!submitBtn) return;
  
  if (isLoading) {
    submitBtn.dataset.originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner">Loading...</span>';
  } else {
    submitBtn.disabled = false;
    submitBtn.textContent = submitBtn.dataset.originalText || 'Submit';
  }
}

function showAlert(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `fixed top-4 right-4 p-4 rounded-md shadow-lg ${
    type === 'error' ? 'bg-red-100 text-red-800' : 
    type === 'success' ? 'bg-green-100 text-green-800' : 
    'bg-blue-100 text-blue-800'
  }`;
  alertDiv.textContent = message;
  
  document.body.appendChild(alertDiv);
  setTimeout(() => alertDiv.remove(), 5000);
}