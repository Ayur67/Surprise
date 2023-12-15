const Model = require("./Model");
const View = require("./View");

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  run() {
    this.view.startView();

    // сейчас 0 при запуске
    while (this.model.currentQuestionIndex < this.model.questions.length) {
      // запускаем переход на следующий вопрос
      const currentQuestion = this.model.NextQuestion();
      // получаем ответ и запускаем следующий вопрос
      const userAnswer = this.view.questionsView(currentQuestion.question);
    }

    const currenScore = this.model.scoreModel();
    this.view.startView(currenScore);
  }
}

const gameModel = new Model();
const gameView = new View();
const gameController = new Controller(gameModel, gameView);

gameController.run();
