import readlineSync from 'readline-sync';
import colors from 'colors/safe';
import evenGame from './even';
import calcGame from './calc';
import gcdGame from './gcd';
import balanceGame from './balance';
import progressionGame from './progression';
import primeGame from './prime';

const choice = () => {
  const choiceGame = () => readlineSync.question(colors.cyan(`What game would you like to play?\n
Select the number of the game!

  1) brain-even
  2) brain-calc
  3) brain-gcd
  4) brain-balance
  5) brain-progression
  6) brain-prime

Number: `));

  switch (choiceGame()) {
    case '1':
      return evenGame();
    case '2':
      return calcGame();
    case '3':
      return gcdGame();
    case '4':
      return balanceGame();
    case '5':
      return progressionGame();
    case '6':
      return primeGame();
    default:
      console.log('Try again, this number has no game!');
      return choice();
  }
};

export default choice;
