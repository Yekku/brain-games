import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

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
    console.log('Correct!');
    return playGame(taskAndSolution, counter - 1);
  }
  console.log(`Sorry, '${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
  return false;
};

const gameFlow = (taskAndSolution, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const isWin = playGame(taskAndSolution, numberOfRounds);
  if (isWin) {
    return console.log(`Congratulations, ${name}!`);
  }
  return console.log(`Let's try again, ${name}!`);
};

export default gameFlow;
