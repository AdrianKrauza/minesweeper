/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { bomb, secondsToTime } from 'utils.js';

import { restartGame } from '../restartGame';
import { won } from '../won';
import { Container, Header, Box } from '../style';
import Difficult from 'components/Difficult';
import Boxs from 'components/Boxs';
import Clock from 'components/Clock';
import Flag from 'components/Flag';
document.addEventListener('contextmenu', e => e.preventDefault());

const Sudoku = () => {
	const toVisible = [];
	const difficults = {
		Begginer: { size: 15, bomb: 20, name: 'Begginer' },
		Intermediate: { size: 20, bomb: 20, name: 'Intermediate' },
		Expert: { size: 25, bomb: 50, name: 'Expert' }
	};

	const [ difficult, setDifficult ] = useState(difficults.Begginer);
	const [ isActive, setIsActive ] = useState(false);
	const [ boardPattern, setBoardPattern ] = useState([]);
	const [ isVisible, setIsVisible ] = useState([]);
	const [ isFlag, setIsFlag ] = useState([]);
	const [ counter, setCounter ] = useState(0);
	useEffect(
		() => {
			restartGame(difficult, setBoardPattern, setIsVisible, setIsFlag, setIsActive, setCounter);
		},
		[ difficult ]
	);
	useEffect(
		() => {
			let interval = null;
			if (!isActive) {
				interval = setInterval(() => {
					setCounter(counter => counter + 1);
				}, 1000);
			} else if (!isActive && counter !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[ counter, isActive ]
	);
	useEffect(
		() => {
			isVisible.map((element, index) => element && bomb !== boardPattern[index]).filter(element => element)
				.length ===
				Math.pow(difficult.size, 2) - difficult.bomb && won(setIsActive);
		},
		[ isVisible ]
	);
	return (
		<Container difficult={difficult}>
			<button onClick={() => won(setIsActive)}>dsadsa</button>
			<Header>
				<Flag bomb={difficult.bomb} isFlag={isFlag} />
				<Clock secondsToTime={secondsToTime} counter={counter} />
			</Header>
			<Box difficult={difficult}>
				{boardPattern.map((element, index) => (
					<Boxs
						toVisible={toVisible}
						index={index}
						setIsVisible={setIsVisible}
						isVisible={isVisible}
						boardPattern={boardPattern}
						difficult={difficult}
						bomb={difficult.bomb}
						size={difficult.size}
						isFlag={isFlag}
						setIsActive={setIsActive}
						element={element}
						setIsFlag={setIsFlag}
					/>
				))}
			</Box>
			<Difficult difficults={difficults} setDifficult={setDifficult} />
		</Container>
	);
};
export default Sudoku;
