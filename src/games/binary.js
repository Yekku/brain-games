import { cons } from '@hexlet/pairs';
import gameFlow from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Convert the decimal number to binary.';

const binary = () => {
  const question = getRandomNumber(1, 256);
  const answer = question.toString(2);
  return cons(question, answer);
};

export default () => gameFlow(binary, rule);
