import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;

  button + button {
    margin-left: 20px;
  }
`;