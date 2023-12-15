class Model {
  constructor(score = 0) {
    this.score = score;
    // текущий вопрос
    this.currentQuestionIndex = 0;
    // массив с вопросами
    this.questions = [
      {
        question:
          " Какие два слова каждый программист научился программировать в первую очередь?",
        answer: "Привет, Мир!",
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
      {
        question: "Если услышал фразу 'Щас прилетит хук', ты пригнешься?",
        answer: "Да",
      },
      {
        question: "Как программисты наслаждаются жизнью?",
        answer: "Когда их код работает без ошибок",
      },
      {
        question: "Самое высокое здание в Европе?",
        answer: "Лахта",
      },
    ];
  }

  scoreModel() {
    this.score += 1;
    return this.score;
  }

  nextQuestionModel() {
    return this.questions[this.currentQuestionIndex++];
  }
}

module.exports = Model;
