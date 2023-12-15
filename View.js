const inquirer = require('inquirer');

class View {
  startView() {
    console.log('Добро пожаловать на викторину!!!');
  }

  async questionsView(str) {
    const ads = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'bonuses',
          message: `${str}`,
        },
      ])
      .then((answers) => {
        const correctAnswer = `${str}`;
        if (answers.answer === correctAnswer) {
          // Начислить баллы за правильный ответ
          console.log('Твоя правда');
        } else {
          // Начислить баллы за неправильный ответ
          console.log('Подтянись к реальности');
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
