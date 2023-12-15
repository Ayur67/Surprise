const inquirer = require('inquirer');

class View {
  startView() {
    console.log('Welcome на куиз!');
  }

  async questionsView(str) {
    const zxc = await inquirer
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
          console.log('Лучший');
        } else {
          // Начислить баллы за неправильный ответ
          console.log('Сомнительно');
        }
      });
  }

  finishView(score) {
    console.log(
      `Поздравляю! Путь был сложен, но ты справился!) ${score}`
    );
  }
}

module.exports = View;
