'use strict';

//POBIERANIE ELEMENTÓW
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const clearBtn = document.querySelector('.times');
const stopwatch = document.querySelector('.stopwatch');
const archiveBtn = document.querySelector('.history');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const info = document.querySelector('.info');
const modal = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');

//ZMIENNE GLOBALNE
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

let countTime;
let minutes = 0;
let seconds = 0;

//FUNKCJE
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

//odliczanie
const handleStart = () => {
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

//pokaż instrukcję
const showModal = () => {
	modal.style.display = 'block';
	modal.classList.add('modal-animation');
};

//schowaj isntrukcję
const hideModal = () => {
	modal.style.display = 'none';
	modal.classList.remove('modal-animation');
};

//pokaż historię pomiarów
const handleTimeList = () => {
	if (timeList.style.display === '') {
		timeList.style.display = 'block';
	} else {
		timeList.style.display = '';
	}
};

//WYWOŁANIA
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

startBtn.addEventListener('click', handleStart);
info.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
archiveBtn.addEventListener('click', handleTimeList);
