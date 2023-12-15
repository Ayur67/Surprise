const Model = require("./Model");
const View = require("./View");

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  run() {
    this.view.startView();
    const currentQuestion = this.model;
    this.view.questionsView(currentQuestion);
  }
}

const gameModel = new Model();
const gameView = new View();
const gameController = new Controller(gameModel, gameView);

gameController.run();
