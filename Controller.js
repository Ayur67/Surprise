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
      // получаем ответ и запускаем следующий вопрос
      const userAnswer = this.view.questionsView(currentQuestion.question);
      await userAnswer;
    }

    const currenScore = this.model.scoreModel();
    this.view.finishView(currenScore);
  }
}

const gameModel = new Model();
const gameView = new View();
const gameController = new Controller(gameModel, gameView);

gameController.run();
