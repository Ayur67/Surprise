const fs = require("fs").promises;
class Model {
  constructor(score = 0, questions) {
    this.themes = themes;
    this.score = score;
    this.currentQuestion = 0;
    this.questions = [
      {
        question: "Какая самая высокая гора в мире?",
        answer: "Эверест",
      },
      {
        question: "Кто написал 'Войну и мир'?",
        answer: "Лев Толстой",
      },
      {
        question: "Какой химический элемент имеет символ 'O'?",
        answer: "Кислород",
      },
      {
        question: "Кто был первым президентом США?",
        answer: "Джордж Вашингтон",
      },
    ];
  }

  nextQuestion() {
    return (this.currentQuestion += 1);
  }
}

module.exports = Model;
