// Define questions and expected answers
const questions = [
  { question: 'What programming language is used to create web pages?', answer: 'HTML' },
  { question: 'What is used for styling web pages?', answer: 'CSS' },
  { question: 'What language are you studying?', answer: 'JAVASCRIPT' },
  { question: 'What is your college name?', answer: 'DOUGLAS' },
  { question: 'Where is your college located?', answer: 'NEW WEST' }
];

function askQuestions() {
  let correctAnswers = 0;

  questions.forEach(q => {
      const userAnswer = prompt(q.question).toUpperCase();
      if (userAnswer === q.answer) {
          correctAnswers++;
      }
  });

  let rank = '';
  if (correctAnswers === 5) {
      rank = 'Gold';
  } else if (correctAnswers >= 3) {
      rank = 'Silver';
  } else if (correctAnswers >= 1) {
      rank = 'Bronze';
  } else {
      rank = 'No crown';
  }

  document.querySelector('main').innerHTML = `
      <h1>Quiz Game</h1>
      <p>You got ${correctAnswers} out of 5 questions correct.</p>
      <p>Your rank: ${rank}</p>
  `;
}

// Run the quiz when the page loads
askQuestions();
