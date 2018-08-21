import readlineSync from 'readline-sync';

const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name?: ');

const newGame = () => {
    welcomeMessage();

    const playerName = getName();
    console.log(`Hello, ${playerName}!\n`);

};

export { newGame };

