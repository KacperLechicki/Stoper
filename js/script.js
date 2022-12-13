'use strict';

const modal = document.querySelector('.modal-shadow');
const info = document.querySelector('.info');
const closeBtn = document.querySelector('.close');
const timeList = document.querySelector('.time-list');
const archiveBtn = document.querySelector('.history');

const showModal = () => {
	modal.style.display = 'block';
	modal.classList.add('modal-animation');
};

const hideModal = () => {
	modal.style.display = 'none';
	modal.classList.remove('modal-animation');
};

const handleTimeList = () => {
	if (timeList.style.display === 'none') {
		timeList.style.display = 'block';
	} else {
		timeList.style.display = 'none';
	}
};

info.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
archiveBtn.addEventListener('click', handleTimeList);
