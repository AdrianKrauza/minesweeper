import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
export const StyledClock = styled(ClockIcon)`
width: 3.7rem;
height: 3.7rem;
`;

export const Clock = styled.div`display: flex;`;
export const Text = styled.div`
	font-size: 3.5rem;
	margin-left: 1rem;
	width: 10rem;
`;
const clock = ({ secondsToTime ,counter}) => (
	<Clock>
		<StyledClock />
		<Text>{secondsToTime(counter)}</Text>
	</Clock>
);

export default clock;
