const urlParams = new URLSearchParams(window.location.search);
const urlQuestion = urlParams.get("question");

const container = document.querySelector('.container');
const yesButt = document.querySelector('.yes-butt');
const noButt = document.querySelector('.no-butt');
const extraText = document.querySelector('.extra-text');
const endScreen = document.querySelector('.end-screen');
const questionInput = document.querySelector('.question-input');

const defaultInputValue = 'Потанцюємо?';
const secretKey = "qwerty1234";


if (isMobile) renderMobileScreen();

document.addEventListener('touchstart', (e) => {
	e.preventDefault();
	renderMobileScreen();
})


questionInput.value = urlQuestion ? decryptString(urlQuestion) : defaultInputValue;

questionInput.addEventListener('change', (e) => {
	const encrypted = encryptString(e.target.value);
	setSearchParam(encrypted);
});

yesButt.addEventListener('click', () => endScreen.style.display = 'flex');
noButt.addEventListener('click', () => location.reload());
noButt.addEventListener('mouseenter', moveNoButt);

let count = 0;
const position = {
	x: 0,
	y: 0
};

function moveNoButt() {
	const newPosition = getRandomPosition();

	if (newPosition.y < 15 || (newPosition.y > 140 && newPosition.x > 100) || newPosition.x < -100) {
		if (newPosition.y > position.y + 100 || newPosition.y < position.y - 100 || position.y === 0) {
			position.y = newPosition.y;
		}
		if (newPosition.x > position.x + 150 || newPosition.x < position.x - 150 || position.x === 0) {
			position.x = newPosition.x;
		}
	}

	if (position.y !== newPosition.y || position.x !== newPosition.x) moveNoButt();
	else count++;

	noButt.style.top = `${position.y}px`;
	noButt.style.right = `${position.x}px`;

	if (count > 15) {
		setTimeout(() => noButt.classList.add("butt--super-small"), 250);
		yesButt.classList.add("yes-butt--only-option");
	}
	else if (count > 10) extraText.style.color = '#EDF2F4';
	else if (count > 5) setTimeout(() => noButt.classList.add("butt--small"), 230);
	else if (count > 2) yesButt.classList.add("yes-butt--hinted");
}
