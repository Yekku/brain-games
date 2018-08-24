import readlineSync from 'readline-sync';
import colors from 'colors/safe';
import choice from './games/brain';

const playOrExit = () => readlineSync.question(`Would You play another game?\n
Answer "yes" for return to menu,
Otherwise answer "no" for exit. `);

const exit = () => {
  if (playOrExit() === 'yes') {
    choice();
  }
  return console.log(colors.yellow('Thank You!'));
};

export default exit;
