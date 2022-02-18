import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 20px;

  button + button {
    margin-left: 20px;
  }
`;

export const TitleContainer = styled.div`
  h1 {
    text-align: center;
  }

  @media(min-width: 414px) {
    h1 {
      text-align: unset;
    }
  }
`;