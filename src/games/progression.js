import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandomNumber from '../utils';

const rule = 'What number is missing in this progression?';
const progressionLength = 10;

const generateProgression = (startNumber, stepValue) => {
  const mathProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    mathProgression.push(startNumber + stepValue * i);
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

const game = () => gameFlow(progression, rule);

export default game;
