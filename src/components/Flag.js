import React from 'react';
import styled from 'styled-components';
import { ReactComponent as redFlagIcon } from 'assets/icons/red-flag.svg';
const BoxFlag = styled(redFlagIcon)`
width: 70%;
height: 100%;

`;

export const StyledFlag = styled(BoxFlag)`
width: 3.7rem;
height: 3.7rem;

`;


export const Flag = styled.div`
	display: flex;
	/* padding: 0 5rem; */
`;

export const Text = styled.div`
	font-size: 3.5rem;
	margin-left: 1rem;
	width: 10rem;
`;
const flag = ({ bomb, isFlag }) => (
	<Flag>
		<StyledFlag />
		<Text>{bomb - isFlag.filter(element => element).length}</Text>
	</Flag>
);

export default flag;
