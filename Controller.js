const Model = require("./Model");
const View = require("./View");

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    // старт
    this.view.startView();

    // сейчас 0 при запуске
    while (this.model.currentQuestionIndex < this.model.questions.length) {
      // запускаем переход на следующий вопрос
      const currentQuestion = this.model.nextQuestionModel();

      const userAnswer = this.view.questionsView(
        currentQuestion.question,
        currentQuestion.answer
      );

      await userAnswer;

      if (userAnswer === currentQuestion.answer) {
        this.model.scoreModel();
      }
    }

    this.view.finishView(this.model.score);
  }
}

const gameModel = new Model();
const gameView = new View();
const gameController = new Controller(gameModel, gameView);

gameController.run();
