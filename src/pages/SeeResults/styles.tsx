import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-top: 80px;

  @media(min-width: 1024px) {
    width: 1000px;
    margin: 0 auto;
    margin-top: 150px;
  }
`;

export const List = styled.ul`
  margin-top: 30px;
  padding-bottom: 50px;
`;

export const ListItem = styled.li`
  list-style: none;
  width: calc(100% - 10px);
  border-radius: 5px;
  font-size: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + li {
    margin-top: 30px;
  }

  strong {
    margin-left: 10px;
    color: ${props => props.theme.colors.blue}
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;