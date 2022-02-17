import styled from 'styled-components';

type ContainerType = {
  justifyContent: string;
  alignItems: string;
};

export const Container = styled.div<ContainerType>`
  width: 100%;
	height: 100%;
	display: flex;
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
	flex-direction: column;
`;