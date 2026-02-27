import { cons } from '@hexlet/pairs';
import gameFlow from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the nearest integer square root of the number.';

const sqrt = () => {
  const root = getRandomNumber(1, 16);
  const question = root * root;
  const answer = String(root);
  return cons(question, answer);
};

export default () => gameFlow(sqrt, rule);
