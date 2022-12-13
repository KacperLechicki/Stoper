'use strict';

const modal = document.querySelector('.modal-shadow');
const info = document.querySelector('.info');
const closeBtn = document.querySelector('.close');

const showModal = () => {
	modal.style.display = 'block';
	modal.classList.add('modal-animation');
};

const hideModal = () => {
	modal.style.display = 'none';
	modal.classList.remove('modal-animation');
};

info.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
