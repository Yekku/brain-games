import readlineSync from 'readline-sync';
import chalk from 'chalk';
import choice from './games/brain.js';

const exit = () => {
  const answer = readlineSync.question('\nPress Enter to play again or type "no" to exit: ').trim().toLowerCase();
  if (answer === 'no') {
    return console.log(chalk.yellow('Thank You!'));
  }
  return choice();
};

export default exit;
