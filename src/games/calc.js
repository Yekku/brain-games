import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomIndex = Math.floor(Math.random() * 3);
const randomOperator = operators[randomIndex];

const calc = () => {
  const firstNum = getRandomNumber(1, 99);
  const secondNum = getRandomNumber(1, 99);
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  let answer;

  switch (randomOperator) {
    case '+':
      answer = String(firstNum + secondNum);
      break;
    case '-':
      answer = String(firstNum - secondNum);
      break;
    default:
      answer = String(firstNum * secondNum);
  }
  return cons(question, answer);
};
// const operators = ['+', '-', '*'];
// const randomIndex = Math.floor(Math.random() * 3);
// const randomOperator = operators[randomIndex];

// const calc = () => {
//   const calculator = (operator, num1, num2) => {
//     switch (operator) {
//       case '-': return num1 - num2;
//       case '+': return num1 + num2;
//       default: return num1 * num2;
//     }
//   };

//   const num1 = getRandomNumber(1, 99);
//   const num2 = getRandomNumber(1, 99);
//   const operator = randomOperator();
//   const question = `${num1} ${operator} ${num2}`;
//   const answer = `${calculator(operator, num1, num2)}`;

//   return cons(question, answer);
// };

const game = () => {
  gameFlow(calc, rule);
};

export default game;
