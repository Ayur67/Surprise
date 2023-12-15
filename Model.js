class Model {
  constructor(score = 0) {
    this.score = score;
    // текущий вопрос
    this.currentQuestionIndex = 0;
    // массив с вопросами
    this.questions = [
      {
        question: "Смотрел(а) ли ты 'Слово пацана'?",
        answer: "Да",
      },
      {
        question: "Снится ли тебе по ночам код?",
        answer: "Да",
      },
      {
        question: "Как называется наша галактика?",
        answer: "Млечный Путь",
      },
      {
        question: "Видишь ли ты иногда в зеркале Райана Гослинга?",
        answer: "Всегда",
      },
      {
        question: "Кто написал 'Войну и мир'?",
        answer: "Лев Толстой",
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
