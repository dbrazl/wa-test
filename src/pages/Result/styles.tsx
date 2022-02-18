import { darken } from "polished";
import styled from "styled-components";

export const Name = styled.p`
  font-size: inherit;
  font-weight: inherit;
  color: ${props => props.theme.colors.blue};
  margin-left: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

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

export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  li + li {
    margin-top: 30px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .correct {
    background: ${props => props.theme.colors.green};
    color: white;

    .hover-number {
      background: ${props => darken(0.1, props.theme.colors.green)};
      color: white;
    }
  }

  .wrong {
    background: ${props => props.theme.colors.red};
    color: white;

    .hover-number {
      background: ${props => darken(0.1, props.theme.colors.red)};
      color: white;
    }
  }

  .selected {
    background: ${props => props.theme.colors.blue};
    color: white;

    .hover-number {
      background: ${props => darken(0.1, props.theme.colors.blue)};
      color: white;
    }
  }
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

export const QuestionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
`;