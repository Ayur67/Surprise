const fs = require("fs").promises;

class Model {
  constructor() {
    this.score = 0;
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
    console.log(this.questions);
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
