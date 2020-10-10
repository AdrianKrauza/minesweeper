import { bomb, move } from 'utils.js';
import { allvisible } from './allvisible';
import { lost } from "./lost";
export const handleClickLeft = (toVisible, index, isVisible, boardPattern, size, isFlag, setIsActive,setIsFlag) => {
	let visible = [...isVisible];
	if (!isFlag[index]) {
		toVisible.push(index);
		while (toVisible.length) {
			index = toVisible[0];
			visible[index] = true;
			if (boardPattern[index] === 0) {
				move(size, index).forEach(element => {
					element += toVisible[0];
					if (Math.pow(size, 2) > element && visible[element] !== true && !isFlag[element]) {
						boardPattern[element] !== 0
							? (visible[element] = true)
							: toVisible.find(el => el === element) === undefined && toVisible.push(element);
					}
				});
			} else if (boardPattern[index] === bomb) {
				visible.fill(true);
				// setIsFlag.fill(true)
				setIsFlag(isFlag.fill(false))
				// allvisible(visible, setIsActive,setIsFlag)
				lost(setIsActive)
			}
			toVisible.shift(visible,setIsActive,lost);
		}
	}
	return visible;
};
