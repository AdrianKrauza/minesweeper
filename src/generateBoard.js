import { bomb, move, RandomNumber } from 'utils.js';
export const generateBoard = (sizeBoard, bombs) => {
	let pattern = new Array(Math.pow(sizeBoard, 2)).fill(0);
	let rand;
	for (let i = 0; i < bombs; i++) {
		do {
			rand = RandomNumber(0, Math.pow(sizeBoard, 2));
		} while (pattern[rand] === bomb);
		pattern[rand] = bomb;
	}

	pattern.forEach(
		(element, index) => element !== bomb &&
			move(sizeBoard, index).map(
				element => element !== false && pattern[index + element] === bomb && pattern[index]++
			)
	);
	return pattern;
};
