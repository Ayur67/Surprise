const fs = require("fs").promises;
class Model {
  constructor(score = 0, questions) {
    this.themes = themes;
    this.score = score;
    this.currentQuestion = 0;
    this.questions = [
      {
        question: "Какая самая высокая гора в мире?",
        answers: 
          { answer1: "Эверест", value1: 1 },
          { answer2: "Эльбрус", value2: 0 },
          { answer3: "Альпы", value3: 0 },
      },
      {
        question: "Кто написал 'Войну и мир'?",
        answers:
          { answer1: "Федор Тютчев", value1: 0 },
          { answer2: "Лев Толстой", value2: 1 },
          { answer3: "Александр Пушкин", value3: 0 },
      },
      {
        question: "Какой химический элемент имеет символ 'O'?",
        answers: 
          { answer1: "Водород", value1: 0 },
          { answer2: "Кислород", value2: 1 },
          { answer3: "Кальций", value3: 0 },
      }
    ];
  }

  nextQuestionModel() {
    return (this.currentQuestion += 1);
  }
}

module.exports = Model;
