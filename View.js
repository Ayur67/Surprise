const inquirer = require("inquirer");

class View {
  startView() {
    console.log("Добро пожаловать на викторину!!!");
  }

  questionsView(obj) {
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "bonuses",
          message: `${obj.question}`,
          choices: [
            { name: `${obj.answers.answer1}`, value: `${obj.answers.value1}` },
            { name: `${obj.answers.answer2}`, value: `${obj.answers.value2}` },
            { name: `${obj.answers.answer3}`, value: `${obj.answers.value3}` },
          ],
        },
      ])
      .then((answers) => console.log(answers));
  }

  finishView(score) {
    console.log(
      `Поздравляю! Вы завершили игру! Ваше количество очков ${score}`
    );
  }
}

module.exports = View;
