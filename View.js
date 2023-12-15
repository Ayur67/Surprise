const inquirer = require("inquirer");

class View {
  startView() {
    console.log("Добро пожаловать на викторину!!!");
  }

  questionsView(obj) {
    inquirer
      .prompt([
        {
          name: "faveReptile",
          message: `${obj.question}`,
        },
      ])
      .then((answers) => {
        if (answers === obj.answer) {
          console.info("Answer:", answers.faveReptile);
        } else {
          console.info("неверно");
        }
      });
  }

  finishView(score) {
    console.log(
      `Поздравляю! Вы завершили игру! Ваше количество очков ${score}`
    );
  }
}

module.exports = View;
