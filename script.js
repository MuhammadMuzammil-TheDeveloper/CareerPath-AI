// Quiz Data
const quizQuestions = [
  {
    question: "Which of these activities do you enjoy the most?",
    options: [
      "Solving complex problems",
      "Creating art or designing things",
      "Helping or teaching others",
      "Analyzing data or researching",
      "Leading or organizing people"
    ],
    categories: ["Analytical", "Creative", "Social", "Investigative", "Enterprising"]
  },
  {
    question: "What type of work environment do you prefer?",
    options: [
      "Structured and predictable",
      "Flexible and dynamic",
      "Fast-paced and challenging",
      "Collaborative and team-oriented",
      "Independent and self-directed"
    ],
    categories: ["Conventional", "Artistic", "Enterprising", "Social", "Realistic"]
  },
  {
    question: "Which school subject did you enjoy the most?",
    options: [
      "Mathematics",
      "Art or Music",
      "Literature or Languages",
      "Science",
      "Business or Economics"
    ],
    categories: ["Investigative", "Artistic", "Social", "Scientific", "Enterprising"]
  },
  {
    question: "How do you approach problems?",
    options: [
      "Step-by-step logical analysis",
      "Creative out-of-the-box thinking",
      "Discussing with others to find solutions",
      "Researching similar problems",
      "Taking immediate action to solve them"
    ],
    categories: ["Conventional", "Artistic", "Social", "Investigative", "Realistic"]
  },
  {
    question: "What are you most passionate about?",
    options: [
      "Technology and innovation",
      "Art and self-expression",
      "Helping people and communities",
      "Discovering new knowledge",
      "Building businesses and organizations"
    ],
    categories: ["Investigative", "Artistic", "Social", "Scientific", "Enterprising"]
  },
  {
    question: "Which of these describes your strengths?",
    options: [
      "Logical thinking and analysis",
      "Creativity and imagination",
      "Communication and empathy",
      "Attention to detail and research",
      "Leadership and decision-making"
    ],
    categories: ["Analytical", "Creative", "Social", "Investigative", "Enterprising"]
  },
  {
    question: "What type of tasks do you enjoy most?",
    options: [
      "Working with numbers and data",
      "Designing or creating things",
      "Teaching or counseling others",
      "Conducting experiments or research",
      "Managing projects or people"
    ],
    categories: ["Conventional", "Artistic", "Social", "Investigative", "Enterprising"]
  },
  {
    question: "How do you prefer to learn new things?",
    options: [
      "Through structured courses and books",
      "Through hands-on experimentation",
      "Through discussions with others",
      "Through independent research",
      "Through real-world challenges"
    ],
    categories: ["Conventional", "Artistic", "Social", "Investigative", "Enterprising"]
  },
  {
    question: "What's most important to you in a career?",
    options: [
      "Job security and stability",
      "Creative freedom and expression",
      "Making a difference in people's lives",
      "Intellectual challenge and discovery",
      "High earning potential and growth"
    ],
    categories: ["Conventional", "Artistic", "Social", "Investigative", "Enterprising"]
  },
  {
    question: "Which of these would you enjoy most?",
    options: [
      "Developing a new software algorithm",
      "Designing a brand identity",
      "Volunteering at a community center",
      "Conducting scientific research",
      "Launching a startup company"
    ],
    categories: ["Analytical", "Creative", "Social", "Investigative", "Enterprising"]
  }
];

const careerResults = {
  "Analytical": {
    title: "Analytical Thinker",
    description: "You excel at solving complex problems and working with data. Your logical mind makes you well-suited for technical and analytical careers.",
    careers: ["Data Scientist", "Software Engineer", "Financial Analyst", "Engineer", "Actuary"],
    roadmap: [
      "Step 1: Strengthen your math and analytical skills",
      "Step 2: Learn programming languages like Python or R",
      "Step 3: Pursue a degree in computer science, engineering, or mathematics",
      "Step 4: Gain practical experience through internships",
      "Step 5: Consider professional certifications in your field"
    ]
  },
  "Creative": {
    title: "Creative Mind",
    description: "You thrive in artistic and innovative environments. Your imagination and originality set you apart in creative fields.",
    careers: ["Graphic Designer", "Writer", "Architect", "Marketing Specialist", "Art Director"],
    roadmap: [
      "Step 1: Build a portfolio of your creative work",
      "Step 2: Take courses in design or creative writing",
      "Step 3: Network with professionals in creative industries",
      "Step 4: Seek freelance opportunities to gain experience",
      "Step 5: Develop a unique personal style or brand"
    ]
  },
  "Social": {
    title: "Social Helper",
    description: "You enjoy working with people and making a difference in their lives. Your empathy and communication skills are your strengths.",
    careers: ["Teacher", "Counselor", "Social Worker", "HR Specialist", "Healthcare Professional"],
    roadmap: [
      "Step 1: Volunteer in community service roles",
      "Step 2: Develop active listening and communication skills",
      "Step 3: Pursue education in psychology, social work, or education",
      "Step 4: Gain experience through internships or entry-level positions",
      "Step 5: Consider specialized certifications in your field"
    ]
  },
  "Investigative": {
    title: "Investigative Thinker",
    description: "You have a curious mind and enjoy research and discovery. Your analytical skills make you excellent at solving problems.",
    careers: ["Scientist", "Researcher", "Doctor", "Pharmaceutical Developer", "Academic"],
    roadmap: [
      "Step 1: Develop strong research and analytical skills",
      "Step 2: Pursue higher education in your field of interest",
      "Step 3: Participate in research projects or labs",
      "Step 4: Publish papers or present at conferences",
      "Step 5: Consider PhD or specialized training for advanced roles"
    ]
  },
  "Enterprising": {
    title: "Enterprising Leader",
    description: "You're a natural leader who enjoys challenges and taking initiative. Your persuasion and leadership skills open doors in business.",
    careers: ["Entrepreneur", "Sales Manager", "Business Consultant", "Executive", "Marketing Director"],
    roadmap: [
      "Step 1: Develop leadership skills through student organizations",
      "Step 2: Learn about business fundamentals and economics",
      "Step 3: Gain sales or customer service experience",
      "Step 4: Build a professional network in your industry",
      "Step 5: Consider an MBA for advanced business roles"
    ]
  },
  "Conventional": {
    title: "Organized Professional",
    description: "You excel in structured environments and enjoy working with data and systems. Your attention to detail is valuable in organizational roles.",
    careers: ["Accountant", "Administrator", "Banker", "Office Manager", "Data Entry Specialist"],
    roadmap: [
      "Step 1: Develop strong organizational and computer skills",
      "Step 2: Learn industry-specific software (e.g., QuickBooks, Excel)",
      "Step 3: Pursue certifications in your field (e.g., CPA for accounting)",
      "Step 4: Gain experience through entry-level positions",
      "Step 5: Specialize in a particular industry or software system"
    ]
  }
};



// Quiz Variables
let currentQuestion = 0;
let userAnswers = [];

// DOM Elements
const quizForm = document.getElementById('quiz-form');
const closeForm = document.getElementById('closeForm');
const userForm = document.getElementById('userForm');
const assessmentButtons = document.querySelectorAll('.btn-primary[href="#quiz"]');
const quizDashboard = document.getElementById('quiz-dashboard');
const dashboardBack = document.getElementById('dashboard-back');
const quizContainer = document.getElementById('quiz-container');
const quizProgress = document.getElementById('quiz-progress');
const prevButton = document.getElementById('prev-question');
const nextButton = document.getElementById('next-question');
const submitButton = document.getElementById('submit-quiz');
const resultsModal = document.getElementById('results-modal');
const resultsContent = document.getElementById('results-content');
const closeResults = document.getElementById('close-results');

// Initialize Quiz
function initQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  renderQuestion();
  // Hide main content and show dashboard
  document.body.classList.add('overflow-hidden');
  quizDashboard.classList.remove('hidden');
  window.scrollTo(0, 0);
}

// Render Current Question
function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  
  quizProgress.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  
  let optionsHTML = '';
  question.options.forEach((option, index) => {
    optionsHTML += `
      <label class="flex items-center p-4 border border-gray-200 rounded-lg mb-3 cursor-pointer hover:bg-primary-50 transition">
        <input type="radio" name="quiz-answer" value="${index}" class="mr-3 h-5 w-5 text-primary-600" 
               ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
        <span class="text-secondary-700">${option}</span>
      </label>
    `;
  });
  
  quizContainer.innerHTML = `
    <h3 class="text-lg md:text-xl font-semibold mb-6 text-secondary-800">${question.question}</h3>
    <div class="space-y-3">${optionsHTML}</div>
  `;
  
  // Update button states
  prevButton.disabled = currentQuestion === 0;
  nextButton.classList.toggle('hidden', currentQuestion === quizQuestions.length - 1);
  submitButton.classList.toggle('hidden', currentQuestion !== quizQuestions.length - 1);
}

// Save User Answer
function saveAnswer() {
  const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestion] = parseInt(selectedOption.value);
  } else if (typeof userAnswers[currentQuestion] === 'undefined') {
    // If no answer selected and no previous answer stored
    return false;
  }
  return true;
}

// Show Results
function showResults() {
  quizDashboard.classList.add('hidden');
  
  // Calculate results
  const categoryScores = {};
  userAnswers.forEach((answer, index) => {
    const category = quizQuestions[index].categories[answer];
    categoryScores[category] = (categoryScores[category] || 0) + 1;
  });
  
  // Get top category
  const topCategory = Object.keys(categoryScores).reduce((a, b) => 
    categoryScores[a] > categoryScores[b] ? a : b
  );
  
  const result = careerResults[topCategory] || careerResults["Analytical"];
  
  // Render results
  resultsContent.innerHTML = `
    <div class="bg-primary-50 rounded-xl p-6 mb-6">
      <div class="flex items-start mb-4">
        <div class="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
          <i class="fas fa-user-graduate text-white text-xl"></i>
        </div>
        <div>
          <h3 class="text-xl font-bold text-primary-700 mb-1">${result.title}</h3>
          <p class="text-secondary-700">${result.description}</p>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="font-semibold text-secondary-800 mb-3">Recommended Careers:</h4>
        <div class="flex flex-wrap gap-2">
          ${result.careers.map(career => `
            <span class="bg-white px-3 py-1 rounded-full text-sm shadow-sm border border-gray-100">${career}</span>
          `).join('')}
        </div>
      </div>
      
      <div>
        <h4 class="font-semibold text-secondary-800 mb-3">Your Career Roadmap:</h4>
        <ol class="space-y-3">
          ${result.roadmap.map(step => `
            <li class="flex items-start">
              <span class="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">${result.roadmap.indexOf(step)+1}</span>
              <span class="text-secondary-700">${step}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    </div>
    
    <div class="text-center">
      <p class="text-secondary-600 mb-4">Want to explore more career options?</p>
      <button class="btn-primary bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium">
        View Full Report <i class="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  `;
  
  resultsModal.classList.remove('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Quiz navigation
  nextButton.addEventListener('click', () => {
    if (saveAnswer()) {
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        renderQuestion();
      }
    } else {
      alert('Please select an answer before proceeding.');
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  });

  submitButton.addEventListener('click', () => {
    if (saveAnswer()) {
      showResults();
    } else {
      alert('Please select an answer before submitting.');
    }
  });

  closeResults.addEventListener('click', () => {
    resultsModal.classList.add('hidden');
  });

  // Form handling
  assessmentButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      quizForm.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  closeForm.addEventListener('click', () => {
    quizForm.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });

 userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Validate form
  const requiredFields = ['fullName', 'email', 'age', 'gender', 'education', 'country'];
  let isValid = true;
  
  requiredFields.forEach(field => {
    const element = document.getElementById(field);
    if (!element.value.trim()) {
      element.classList.add('border-red-500');
      isValid = false;
    } else {
      element.classList.remove('border-red-500');
    }
  });
  
  if (isValid) {
    try {
      // Get form data
      const formData = {
        name: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: '', // Add phone field if needed
        country: document.getElementById('country').value.trim(),
        age: document.getElementById('age').value.trim(),
        gender: document.getElementById('gender').value.trim(),
        education: document.getElementById('education').value.trim()
      };

      // Send data to backend
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        quizForm.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        initQuiz();
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
  } else {
    alert('Please fill in all required fields.');
  }
});

  dashboardBack.addEventListener('click', () => {
    if (confirm('Are you sure you want to leave? Your progress will be lost.')) {
      quizDashboard.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      window.scrollTo(0, 0);
    }
  });

  // Mobile menu toggle - updated to not affect body overflow
  document.getElementById('mobile-menu-button')?.addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    const icon = this.querySelector('i');
    menu.classList.toggle('hidden');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close mobile menu when clicking links
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

  // FAQ accordion toggle
  document.querySelectorAll('.faq button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('i');
      if (content) content.classList.toggle('hidden');
      if (icon) {
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#quiz') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          document.body.classList.remove('overflow-hidden');
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});// Add these variables at the top with other DOM elements
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('login-form');
const closeLogin = document.getElementById('closeLogin');
const loginFormElement = document.getElementById('loginForm');

// Add these event listeners in the DOMContentLoaded section
showLogin.addEventListener('click', () => {
  quizForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

closeLogin.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

loginFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  // No actual login validation needed per requirements
  loginForm.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  // Redirect to dashboard
  window.location.href = 'Dashboard.html';
});

// Update the existing userForm submit handler to redirect to dashboard
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Skip all validation and backend submission
  quizForm.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  // Redirect to dashboard
  window.location.href = 'career-quiz.html';
});




