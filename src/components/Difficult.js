import React from 'react';
import styled from 'styled-components';
const DifficultButton = styled.button`
	height: 5rem;
	width: 20rem;
	background: ${({ theme }) => theme.colors.gray};
	border: none;
	color: ${({ theme }) => theme.colors.white};
	font-size: 3rem;
	cursor: pointer;
`;
const Difficults = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-around;
`;

const Difficult = ({ difficults, setDifficult }) => (
	<Difficults>
		{Object.keys(difficults).map(name => (
			<DifficultButton onClick={() => setDifficult(difficults[name])}>{name}</DifficultButton>
		))}
	</Difficults>
);

export default Difficult;
