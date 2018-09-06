/* eslint-disable */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const engine = (rules, pair) => {
  console.log('Welcome to Brain Games');
  console.log(`${rules} \n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n `);
  const question = num => console.log(`Question : ${num}`);
  const getUserAnswer = () => {
    const answerUser = readlineSync.question('Your answer: ');
    return answerUser;
  };

  for (let i = 0; i < 3; i += 1) {
    const getPair = pair();
    const answ = cdr(getPair);
    const quest = car(getPair);
    question(quest);
    const answerUser = getUserAnswer();
    if (answerUser !== String(answ)) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answ}' \nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
