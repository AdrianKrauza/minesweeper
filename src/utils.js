const min = (index, sizeBoard) => index % sizeBoard !== 0;
const max = (index, sizeBoard) => index % sizeBoard !== sizeBoard - 1;
// const maxSize = (index, sizeBoard) => 
export const bomb = 'bomb';
export const move = (sizeBoard, index) => [
	min(index, sizeBoard) && -sizeBoard - 1, 
	-sizeBoard, 
	max(index, sizeBoard) && -sizeBoard + 1, 
	min(index, sizeBoard) && -1, 
	max(index, sizeBoard) && 1, 
	min(index, sizeBoard) && sizeBoard - 1, 
	sizeBoard, 
	max(index, sizeBoard) && sizeBoard + 1 
];
export const RandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const secondsToTime = time => {
	let timer;
	let minutes = Math.floor(time / 60);
	let seconds = Math.floor((time - Math.floor(time / 60) * 60) % 60);
	if (seconds < 10) timer = minutes + ':0' + seconds;
	if (seconds >= 10) timer = minutes + ':' + seconds;
	return timer;
};

// }{
