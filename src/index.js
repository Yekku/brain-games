import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import chalk from 'chalk';
import exit from './exit.js';

const numberOfRounds = 3;

const playGame = (taskAndSolution, counter) => {
  if (counter === 0) {
    return true;
  }
  const newQuestion = taskAndSolution();
  const askQuestion = car(newQuestion);
  const answer = cdr(newQuestion);
  console.log(`Question: ${askQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log(chalk.green('Correct!'));
    return playGame(taskAndSolution, counter - 1);
  }
  return console.log(chalk.red(`Sorry, '${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\n`));
};

const gameFlow = (taskAndSolution, rule) => {
  console.log(chalk.bold.cyan('Welcome to the Brain Games!\n'));
  const name = readlineSync.question('May I have your name? ');
  console.log(chalk.yellow(`Hello, ${name}!\n`));
  console.log(chalk.blue(rule));
  const isWin = playGame(taskAndSolution, numberOfRounds);
  if (isWin) {
    console.log(chalk.underline.green(`Congratulations, ${name}!`));
    return exit();
  }
  console.log(chalk.magenta(`Let's try again, ${name}!`));
  return exit();
};

export default gameFlow;
