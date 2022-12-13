'use strict';

const modal = document.querySelector('.modal-shadow');
const info = document.querySelector('.info');
const closeBtn = document.querySelector('.close');

const showModal = () => {
	modal.style.display = 'block';
};

const hideModal = () => {
	modal.style.display = 'none';
};

info.addEventListener('click', showModal);
close.addEventListener('click', hideModal);
