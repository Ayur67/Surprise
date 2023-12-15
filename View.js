const inquirer = require("inquirer");

class View {
  startView() {
    console.log("Добро пожаловать на викторину!!!");
  }

  questionsView(obj) {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'bonuses',
        message: `${obj.questions[i].question}`,
        choices: [
          { name: `${obj.questions[i].answer}`, value: 0 },
        ],
      },
    ])
    .then((answers) => {
      const correctAnswer = `${obj.questions[i].answer}`;
      if (answers.answer === correctAnswer) {
        // Начислить баллы за правильный ответ
      } else {
        // Начислить баллы за неправильный ответ
      }
    })

  finishView(score) {
    console.log(
      `Поздравляю! Вы завершили игру! Ваше количество очков ${score}`
    );
  }
}

module.exports = View;


