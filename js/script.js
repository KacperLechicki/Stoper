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
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';

		timesArray.push(stopwatch.textContent);
	} else {
		time.style.visibility = 'hidden';
	}

	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';

	seconds = 0;
	minutes = 0;
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

//instrukcje
info.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
