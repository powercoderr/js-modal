'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const hidden = document.querySelectorAll('.hidden');

const closeModalButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = function (e) {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  }

  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
  }
};

const closeModal = function () {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }

  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
};

showModalButtons.forEach(showModalButton => {
  showModalButton.addEventListener('click', showModal);
});

closeModalButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //ESC pressed
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
