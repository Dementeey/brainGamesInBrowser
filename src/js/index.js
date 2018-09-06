const helloModal = document.querySelector('.hello');
const modalBtnClose = document.querySelector('.hello__modal-close');
const modalOverlay = document.querySelector('.hello__overlay');
const nameGamesList = document.querySelectorAll('.game-container__side-bar-item');
const nameGamesActiveName = document.querySelector('.nameGames__activeName');

const closeModal = () => helloModal.classList.add('hello--close');

const createNewScript = (value) => {
  const script = document.querySelector(`script[src='${value}']`);

  if (script) {
    return;
  }

  const newScript = document.createElement('script');
  newScript.setAttribute('src', value);

  document.body.appendChild(newScript);
};

const addNameInTitle = (ev) => {
  const e = window.event || ev;
  const obj = e.target;
  const text = obj.textContent;
  nameGamesActiveName.innerText = text;
  switch (text) {
    case 'Balance':
      createNewScript('js/games/balance.js');
      break;
    case 'Calc':
      createNewScript('js/games/calc.js');
      break;
    case 'Even':
      createNewScript('js/games/even.js');
      break;
    case 'Gcd':
      createNewScript('js/games/gcd.js');
      break;
    case 'Prime':
      createNewScript('js/games/prime.js');
      break;
    case 'Progression':
      createNewScript('js/games/progression.js');
      break;
    default:
      break;
  }
};

modalBtnClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
for (let i = 0; i < nameGamesList.length; i += 1) {
  nameGamesList[i].addEventListener('click', () => {
    addNameInTitle(nameGamesList[i]);
  });
}
