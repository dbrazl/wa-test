import { Field } from 'formik';
import styled, { keyframes } from 'styled-components';

const blinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }

  50% {
    border-color: inherit;
  }
`;

export const InputText = styled(Field)`
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