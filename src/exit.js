import readlineSync from 'readline-sync';
import chalk from 'chalk';
import choice from './games/brain.js';

const playOrExit = () => readlineSync.question(`Would You play another game?\n
Answer "yes" for return to menu,
Otherwise answer "no" for exit. `);

const exit = () => {
  if (playOrExit() === 'yes') {
    choice();
  }
  return console.log(chalk.yellow('Thank You!'));
};

export default exit;
