import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'Balance the given number.';

const balance = () => {
  const number = getRandomNumber(100, 1000);
  let numberToArr = number.toString().split('').sort();
  let correctAnswer = '';
  while (correctAnswer === '') {
    const maxNum = Math.max(...numberToArr);
    const minNum = Math.min(...numberToArr);
    if ((maxNum - minNum) <= 1) {
      correctAnswer = numberToArr.sort().join('');
    }
    numberToArr = numberToArr.sort().slice(1, numberToArr.length - 1);
    numberToArr.push(maxNum - 1);
    numberToArr.push(minNum + 1);
  }

  const question = `${number}`;
  const answer = `${correctAnswer}`;

  return cons(question, answer);
};

const game = () => {
  gameFlow(balance, rule);
};
export default game;
