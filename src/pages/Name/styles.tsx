import { Field, Form } from 'formik';
import styled, { keyframes } from 'styled-components';

export const Title = styled.h1`
	font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media(min-width: 780px) {
    font-size: 32px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;

  button + button {
    margin-left: 20px;
  }
`;

const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }

  50% {
    border-color: inherit;
  }
`;

export const Input = styled(Field)`
  font-size: 32px;
  color: ${props => props.theme.colors.blue};
  background: transparent;
  border-right: 5px solid ${props => props.theme.colors.blue};
  width: ${props => (props.value as string)?.length > 0 ? (props.value as string)?.length * 15 + 30 : 0}px;
  text-align: center;
  transition: width 100ms ease-in-out;
  caret-color: transparent;
  animation: ${blinkCaret} 1s infinite;
`;

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
