import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 80px;

  @media(min-width: 1024px) {
    width: 1000px;
    margin: 0 auto;
    margin-top: 150px;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
` 

export const TitleListItem = styled.p`
  margin-bottom: 10px;
`;

export const Option = styled.div`
  width: calc(100% - 20px);
  height: 32px;
  background: white;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  transition: background 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.blue};
    color: white;

    .hover-number {
      background: ${props => darken(0.1, props.theme.colors.blue)};
      color: white;
    }
  }
`;

export const Number = styled.p`
  border-radius: 50%;
  background:  #f5f5f5;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 200ms ease-in-out;
`;

export const ProgressContainer = styled.div`
  margin-bottom: 20px;
`;