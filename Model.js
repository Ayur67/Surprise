const fs = require("fs").promises;

class Model {
  constructor(score = 0) {
    this.score = score;
    // текущий вопрос
    this.currentQuestionIndex = 0;
    // массив с вопросами
    this.questions = [
      {
        question: "Кто написал 'Войну и мир'?",
        answer: "Лев Толстой",
      },
      {
        question: "Какой химический элемент имеет символ 'O'?",
        answer: "Кислород",
      },
    ];
  }

  scoreModel(answer) {
    if (answer) {
      return (this.score += 1);
    }
  }

  nextQuestionModel() {
    return this.questions[this.currentQuestionIndex++];
  }
}

module.exports = Model;
