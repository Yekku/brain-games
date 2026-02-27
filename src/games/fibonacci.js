import { cons } from '@hexlet/pairs';
import gameFlow from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is a Fibonacci number, otherwise answer "no".';

const isFibonacci = (num) => {
  let a = 0;
  let b = 1;
  while (b < num) {
    [a, b] = [b, a + b];
  }
  return b === num || num === 0;
};

const fibonacci = () => {
  const question = getRandomNumber(1, 100);
  const answer = isFibonacci(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameFlow(fibonacci, rule);
