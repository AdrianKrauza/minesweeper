export const handleClickRight = (index, isFlag, isVisible, bomb) => {
	let visible = [...isFlag];
	if (!isVisible[index] && bomb - isFlag.filter(element => element).length !== 0)
		visible[index] = !visible[index];
	return visible;
};
