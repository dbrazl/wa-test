import { Form } from 'formik';
import styled from 'styled-components';

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

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
