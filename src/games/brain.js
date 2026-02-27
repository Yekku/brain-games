import readlineSync from 'readline-sync';
import chalk from 'chalk';
import evenGame from './even.js';
import calcGame from './calc.js';
import gcdGame from './gcd.js';
import balanceGame from './balance.js';
import progressionGame from './progression.js';
import primeGame from './prime.js';
import fibonacciGame from './fibonacci.js';
import sqrtGame from './sqrt.js';
import binaryGame from './binary.js';

const choice = () => {
  const choiceGame = () => readlineSync.question(chalk.cyan(`What game would you like to play?\n
Select the number of the game!

  1) brain-even
  2) brain-calc
  3) brain-gcd
  4) brain-balance
  5) brain-progression
  6) brain-prime
  7) brain-fibonacci
  8) brain-sqrt
  9) brain-binary

Number: `));

  switch (choiceGame()) {
    case '1':
      return evenGame();
    case '2':
      return calcGame();
    case '3':
      return gcdGame();
    case '4':
      return balanceGame();
    case '5':
      return progressionGame();
    case '6':
      return primeGame();
    case '7':
      return fibonacciGame();
    case '8':
      return sqrtGame();
    case '9':
      return binaryGame();
    default:
      console.log(chalk.red('Try again, this number has no game!'));
      return choice();
  }
};

export default choice;
