import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const even = () => {
  const question = getRandomNumber(1, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

const game = () => gameFlow(even, rule);

export default game;
