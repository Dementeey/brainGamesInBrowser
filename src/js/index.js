const helloModal = document.querySelector('.hello');
const modalBtnClose = document.querySelector('.hello__modal-close');
const modalOverlay = document.querySelector('.hello__overlay');


const nameGamesList = document.querySelectorAll('.game-container__side-bar-list');
const nameGamesActiveName = document.querySelector('.nameGames__activeName');

const closeModal = () => helloModal.classList.add('hello--close');
// const addNameInTitle = () => {}


modalBtnClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

for (let i = 0; i < nameGamesList.length; i += 1) {
  // nameGamesList[i].addEventListener('click', addNameInTitle);
  nameGamesList[i].addEventListener('click', () => {
    const text = this.textContent;
    alert(text);
  });
}
