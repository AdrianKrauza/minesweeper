import React from 'react';
import styled from 'styled-components';
import { handleClickLeft } from '../handleClickLeft';
import { handleClickRight } from '../handleClickRight';
import { ReactComponent as BombIcon } from 'assets/icons/bomb.svg';
import { ReactComponent as redFlagIcon } from 'assets/icons/red-flag.svg';

const Boxs = styled.div`
	font-weight: bold;
	border: ${({ isVisible }) => (isVisible ? 3 : 3)}px solid
		${({ theme, isVisible }) => (isVisible ? theme.colors.transparent : theme.colors.white)};
	border-radius: 0.5rem;
	text-align: center;
	font-size: ${({ difficult }) =>
		difficult.name === 'Begginer' ? 3.3 : difficult.name === 'Intermediate' ? 2.7 : 2.5}rem;
	color: ${({ theme, numberBomb }) => theme.colors[numberBomb]};
	transition:background-color .5s;
	background-color: ${({ theme, isVisible }) => (isVisible ? theme.colors.lightGray : theme.colors.gray)};
	cursor: pointer;
`;
const BoxBomb = styled(BombIcon)`
width: 80%;
height: 100%;

`;
const BoxFlag = styled(redFlagIcon)`
width: 70%;
height: 100%;

`;
const boxs = ({
	toVisible,
	index,
	isVisible,
	boardPattern,
	size,
	isFlag,
	setIsActive,
	element,
	setIsFlag,
	setIsVisible,
	bomb,
	difficult
}) => (
	<Boxs
		onClick={() =>
			setIsVisible(handleClickLeft(toVisible, index, isVisible, boardPattern, size, isFlag, setIsActive,setIsFlag))}
		onContextMenu={() => setIsFlag(handleClickRight(index, isFlag, isVisible, bomb))}
		numberBomb={element}
		isVisible={isVisible[index]}
		difficult={difficult}
	>
		{!isFlag[index] ? isVisible[index] ? Number.isInteger(element) ? element === 0 ? (
			''
		) : (
			element
		) : (
			<BoxBomb />
		) : null : (
			<BoxFlag />
		)}
	</Boxs>
);

export default boxs;
