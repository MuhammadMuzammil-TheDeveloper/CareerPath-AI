class Question {
    constructor(id, text, options) {
      this.id = id;
      this.text = text;
      this.options = options;
    }
  }
  
  class QuizManager {
    constructor(questions, careers) {
      this.questions = questions.map(q => new Question(q.id, q.text, q.options));
      this.careers = careers;
      this.currentQuestionIndex = 0;
      this.userResponses = [];
      this.quizContainer = document.getElementById('quiz-container');
      this.resultsContainer = document.getElementById('results-container');
    }
  
    startQuiz() {
      this.showQuestion();
      this.quizContainer.classList.remove('hidden');
      this.resultsContainer.classList.add('hidden');
    }
  
    showQuestion() {
      if (this.currentQuestionIndex >= this.questions.length) {
        this.showResults();
        return;
      }
  
      const question = this.questions[this.currentQuestionIndex];
      let optionsHtml = question.options.map(option => `
        <label class="flex items-center p-4 border border-gray-200 rounded-lg mb-3 cursor-pointer hover:bg-gray-50 transition">
          <input type="radio" name="question-${question.id}" value="${option.value}" class="mr-3 h-5 w-5 text-primary-600">
          ${option.text}
        </label>
      `).join('');
  
      this.quizContainer.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 animate-fade-in">
          <div class="mb-6">
            <span class="text-primary-600 font-semibold">Question ${this.currentQuestionIndex + 1} of ${this.questions.length}</span>
            <h3 class="text-xl font-bold mt-2">${question.text}</h3>
          </div>
          <div class="space-y-3 mb-6">
            ${optionsHtml}
          </div>
          <button id="next-btn" class="w-full btn-primary gradient-bg text-white px-6 py-3 rounded-lg font-medium">
            ${this.currentQuestionIndex === this.questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      `;
  
      document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
    }
  
    nextQuestion() {
      const question = this.questions[this.currentQuestionIndex];
      const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
      
      if (!selectedOption) {
        alert('Please select an option');
        return;
      }
  
      this.userResponses.push(selectedOption.value);
      this.currentQuestionIndex++;
      this.showQuestion();
    }
  
    showResults() {
      const careerMatch = this.analyzeResponses();
      this.quizContainer.classList.add('hidden');
      this.resultsContainer.classList.remove('hidden');
      
      this.resultsContainer.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-2xl mx-auto animate-fade-in">
          <div class="text-center mb-8">
            <div class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-check text-white text-3xl"></i>
            </div>
            <h2 class="text-2xl font-bold mb-2">Your Ideal Career Path</h2>
            <p class="text-secondary-600">Based on your answers, we recommend:</p>
          </div>
          
          <div class="bg-primary-50 p-6 rounded-lg mb-8">
            <h3 class="text-xl font-bold text-primary-800 mb-2">${careerMatch.title}</h3>
            <p class="text-secondary-700">${careerMatch.description}</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-white p-4 border border-gray-200 rounded-lg">
              <h4 class="font-semibold text-secondary-800 mb-1">Next Steps</h4>
              <p class="text-sm text-secondary-600">Research educational requirements</p>
            </div>
            <div class="bg-white p-4 border border-gray-200 rounded-lg">
              <h4 class="font-semibold text-secondary-800 mb-1">Salary Range</h4>
              <p class="text-sm text-secondary-600">$60,000 - $120,000</p>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button id="restart-btn" class="btn-primary gradient-bg text-white px-6 py-3 rounded-lg font-medium">
              <i class="fas fa-redo mr-2"></i> Retake Quiz
            </button>
            <button class="btn-primary bg-white text-primary-700 px-6 py-3 rounded-lg font-medium border border-primary-200 hover:border-primary-300">
              <i class="fas fa-download mr-2"></i> Download Results
            </button>
          </div>
        </div>
      `;
  
      document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
    }
  
    analyzeResponses() {
      // Simple scoring algorithm - counts matches between user responses and career traits
      const careerScores = this.careers.map(career => {
        const score = this.userResponses.filter(response => 
          career.traits.includes(response)
        ).length;
        return { ...career, score };
      });
  
      // Return the career with the highest score
      return careerScores.reduce((prev, current) => 
        (prev.score > current.score) ? prev : current
      );
    }
  
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.userResponses = [];
      this.startQuiz();
    }
  }
  
  // Initialize the quiz when the page loads
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('questions.json');
      const data = await response.json();
      
      const quizManager = new QuizManager(data.questions, data.careers);
      
      // Start quiz when the "Start Quiz" button is clicked
      document.querySelectorAll('[data-start-quiz]').forEach(button => {
        button.addEventListener('click', () => {
          // Scroll to quiz section
          document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
          quizManager.startQuiz();
        });
      });
      
    } catch (error) {
      console.error('Error loading quiz data:', error);
      document.getElementById('quiz-container').innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
          <i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
          <h3 class="text-xl font-bold mb-2">Error Loading Quiz</h3>
          <p class="text-secondary-600 mb-4">We couldn't load the quiz questions. Please try again later.</p>
          <button class="btn-primary gradient-bg text-white px-6 py-2 rounded-lg font-medium" onclick="location.reload()">
            <i class="fas fa-sync-alt mr-2"></i> Reload Page
          </button>
        </div>
      `;
    }
  });