import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import chalk from 'chalk';
import exit from './exit.js';

const numberOfRounds = 3;
let savedName = '';

const playGame = (taskAndSolution, counter, round = 1) => {
  if (counter === 0) {
    return true;
  }
  const newQuestion = taskAndSolution();
  const askQuestion = car(newQuestion);
  const answer = cdr(newQuestion);
  console.log(chalk.dim(`\nRound ${round}/${numberOfRounds}`));
  console.log(`Question: ${askQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ').trim();
  if (userAnswer === answer) {
    console.log(chalk.green('Correct!'));
    return playGame(taskAndSolution, counter - 1, round + 1);
  }
  return console.log(chalk.red(`Sorry, '${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\n`));
};

const gameFlow = (taskAndSolution, rule) => {
  console.log(chalk.bold.cyan('Welcome to the Brain Games!\n'));
  if (!savedName) {
    savedName = readlineSync.question('May I have your name? ').trim();
  }
  console.log(chalk.yellow(`Hello, ${savedName}!\n`));
  console.log(chalk.blue(rule));
  const isWin = playGame(taskAndSolution, numberOfRounds);
  if (isWin) {
    console.log(chalk.underline.green(`Congratulations, ${savedName}!`));
    return exit();
  }
  console.log(chalk.magenta(`Let's try again, ${savedName}!`));
  return exit();
};

export default gameFlow;
