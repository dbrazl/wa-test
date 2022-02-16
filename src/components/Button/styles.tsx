import styled from 'styled-components';

export const Container = styled.button`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.blue};
  box-shadow: 0px 2px 7px ${props => props.theme.colors.blackShadow};;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }
`;
