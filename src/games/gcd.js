import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = () => {
  const firstNumber = getRandomNumber(1, 99);
  const secondNumber = getRandomNumber(1, 99);

  const gcd = (n1, n2) => {
    const dividend = Math.max(n1, n2);
    const divisor = Math.min(n1, n2);
    const remainder = dividend % divisor;
    if (remainder === 0) {
      return divisor;
    }
    return gcd(divisor, remainder);
  };

  const result = gcd(firstNumber, secondNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${result}`;

  return cons(question, answer);
};

const game = () => gameFlow(greatestCommonDivisor, rule);

export default game;
