import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2 || (num % 2 === 0 && num !== 2)) {
    return false;
  }
  const maxDiv = Math.round(Math.sqrt(num)) + 1;
  for (let i = 3; i < maxDiv; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const question = getRandomNumber(1, 30);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameFlow(prime, rule);
