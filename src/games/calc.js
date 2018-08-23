import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calc = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const randomOperator = operators[randomIndex];
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

export default () => gameFlow(calc, rule);
