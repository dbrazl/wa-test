import { Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: inherit;
  font-weight: inherit;
  color: ${props => props.theme.colors.blue};
`;