import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'What number is missing in this progression?';
const progressionLength = 10;

const generateProgression = (num1, num2) => {
  const mathProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    mathProgression.push(num1 + num2 * i);
  }
  return mathProgression;
};

const progression = () => {
  const startNumber = getRandomNumber(1, 100);
  const stepValue = getRandomNumber(1, 5);
  const mathProgression = generateProgression(startNumber, stepValue);
  const hiddenElementPosition = getRandomNumber(0, mathProgression.length - 1);
  const answer = mathProgression[hiddenElementPosition].toString();
  mathProgression[hiddenElementPosition] = '..';
  const question = mathProgression.join(' ');
  return cons(question, answer);
};

export default () => gameFlow(progression, rule);
