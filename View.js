const inquirer = require("inquirer");

class View {
  startView() {
    console.log("Добро пожаловать на викторину!!!");
  }
  async questionsView(str, trueAnswer) {
    const ads = await inquirer

      .prompt([
        {
          type: "input",
          name: "bonuses",
          message: `${str}`,
        },
      ])
      .then((answers) => {
        if (answers.bonuses.toLowerCase() === trueAnswer.toLowerCase()) {
          // Начислить баллы за правильный ответ
          console.log("Лучший");
        } else {
          // Начислить баллы за неправильный ответ
          console.log("Сомнительно");
        }
      });
  }

  finishView(score) {
    console.log(`Поздравляю! Путь был сложен, но ты справился!) ${score}`);
  }
}

module.exports = View;
