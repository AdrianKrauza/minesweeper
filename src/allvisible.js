export const allvisible = (visible, setIsActive, lost,setIsFlag) => {
	visible.fill(true);
	console.log(setIsFlag)
	// setIsFlag.fill(false)
	lost(setIsActive);
};
