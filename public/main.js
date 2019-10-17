const qs = (e) => document.querySelector(e);

let playerOne = '';
let playerTwo = '';

const playerOnePicksRock = () => {
	console.log('rock');
	qs('.playerOneSelection').textContent = 'Rock';
};

const playerOnePicksPaper = () => {
	console.log('paper');
	qs('.playerOneSelection').textContent = 'Paper';
};

const playerOnePicksScissors = () => {
	console.log('scissors');
	qs('.playerOneSelection').textContent = 'Scissors';
};

const main = () => {
	qs('.playerOne.rock').addEventListener('click', playerOnePicksRock);
};

document.addEventListener('DOMContentLoaded', main);
