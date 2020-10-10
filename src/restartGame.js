import { generateBoard } from "./generateBoard";

export const restartGame = ({ size, bomb }, setBoardPattern, setIsVisible, setIsFlag, setIsActive, setCounter) => {
	setBoardPattern(generateBoard(size, bomb));
	setIsVisible(new Array(Math.pow(size, 2)).fill(false));
	setIsFlag(new Array(Math.pow(size, 2)).fill(false));

	setCounter(0);
	setIsActive(false);
};
