
import styled from 'styled-components';

export const Container = styled.div`
	width: ${({ difficult }) => (difficult.name === 'Begginer' ? 70 : difficult.name === 'Intermediate' ? 75 : 80)}rem;
	margin: auto;
`;
export const Header = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: space-around;
`;
export const Box = styled.div`
	width: 100%;
	height: ${({ difficult }) => (difficult.name === 'Begginer' ? 70 : difficult.name === 'Intermediate' ? 75 : 80)}rem;
	margin: auto;
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(${({ difficult }) => difficult.size}, 1fr);
	grid-template-rows: repeat(${({ difficult }) => difficult.size}, 1fr);
`;





