// import { cons } from 'hexlet-pairs';
// import engine, { getRandomInt } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const generator = () => {
  const quest = getRandomInt(1, 100);
  const answer = quest % 2 === 0 ? 'yes' : 'no';
  return cons(quest, answer);
};

const gameEven = () => engine(rules, generator);

gameEven();
