
     // Simple FAQ toggle functionality
  // === FAQ Toggle Functionality ===
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
  
  // === Smooth Scrolling ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // === Show Quiz Form ===
  document.querySelector('.btn-primary')?.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('quiz-form')?.classList.remove('hidden');
  });
  
  // === Hide Quiz Form ===
  document.getElementById('closeForm')?.addEventListener('click', function () {
    document.getElementById('quiz-form')?.classList.add('hidden');
  });
  
  // === Form Submission: Save to CSV ===
  document.getElementById('userForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const inputs = this.querySelectorAll('input, select');
    const data = {};
    inputs.forEach(input => {
      const label = input.previousElementSibling?.innerText || input.name;
      data[label] = input.value;
    });
  
    // Convert to CSV format
    const csvHeaders = Object.keys(data).join(',');
    const csvValues = Object.values(data).join(',');
  
    const csvContent = `${csvHeaders}\n${csvValues}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
  
    // Create a link and trigger download
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'careerpath_ai_user_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Optionally hide form after submission
    document.getElementById('quiz-form')?.classList.add('hidden');
  });
  