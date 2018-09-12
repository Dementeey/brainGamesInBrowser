const sessionDataCloseModal = sessionStorage.getItem('closeModal');

if (sessionDataCloseModal === 'true') {
  const helloModal = document.querySelector('.hello');
  helloModal.classList.add('hello--close');
}
