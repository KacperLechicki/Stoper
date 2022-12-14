'use strict';

//POBIERANIE ELEMENTÓW
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

let root = document.documentElement;

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const clearBtn = document.querySelector('.reset');
const stopwatch = document.querySelector('.stopwatch');
const archiveBtn = document.querySelector('.history');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const info = document.querySelector('.question');
const brush = document.querySelector('.brush');
const colors = document.querySelector('.colors');
const redColor = document.querySelector('.one');
const blueColor = document.querySelector('.two');
const limeColor = document.querySelector('.three');

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

let timesArray = [];

//FUNKCJE
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

//STOPER

//odliczanie
const handleStart = () => {
	//czyszczenie interwału, żeby nie wywołać go kilka razy
	clearInterval(countTime);

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

//pauza odliczania
const handlePause = () => {
	clearInterval(countTime);
};

//zatrzymanie odliczania, zerowanie stopera, zerowanie zmiennych od minut i sekund
//zapisywanie czasów różnych od zera do tablicy i wyświetlanie ostatniego czasu
const handleStop = () => {
	time.innerHTML = `Last time: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';

		timesArray.push(stopwatch.textContent);
	} else {
		time.style.visibility = 'hidden';
	}

	clearStuff();
};

//reset wszystkich danych i wartości
const handleClear = () => {
	clearStuff();

	timeList.textContent = '';
	time.style.visibility = 'hidden';
	timesArray = [];
};

const clearStuff = () => {
	clearInterval(countTime);

	stopwatch.textContent = '0:00';
	// timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

//pokaż archiwum
const showArchive = () => {
	timeList.textContent = '';
	let num = 1;

	timesArray.forEach((time) => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Time nr ${num}: <span> ${time} </span>`;

		timeList.appendChild(newTime);
		num++;
	});
};

//INSTRUKCJE

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

//KOLORY
const handleShowingColors = () => {
	if (
		colors.classList.contains('showCircles') ||
		colors.classList.contains('hideCircles')
	) {
		if (colors.classList.contains('showCircles')) {
			colors.classList.remove('showCircles');
			colors.classList.add('hideCircles');
		} else if (colors.classList.contains('hideCircles')) {
			colors.classList.add('showCircles');
			colors.classList.remove('hideCircles');
		}
	} else {
		colors.classList.add('showCircles');
	}
};

const changeToRed = () => {
	root.style.setProperty('--mainColor', 'tomato');
	root.style.setProperty('--redDarker', 'rgb(150, 49, 32)');
};

const changeToBlue = () => {
	root.style.setProperty('--mainColor', 'royalblue');
	root.style.setProperty('--redDarker', 'rgb(23, 49, 129)');
};

const changeToLime = () => {
	root.style.setProperty('--mainColor', 'rgb(24, 182, 24)');
	root.style.setProperty('--redDarker', 'rgb(27, 129, 27)');
};

//WYWOŁANIA
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

//stoper
startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
clearBtn.addEventListener('click', handleClear);
archiveBtn.addEventListener('click', showArchive);

//instrukcje
info.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);

//kolory
brush.addEventListener('click', handleShowingColors);
blueColor.addEventListener('click', changeToBlue);
redColor.addEventListener('click', changeToRed);
limeColor.addEventListener('click', changeToLime);
