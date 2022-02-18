import React, { useContext, useEffect } from 'react';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { UserContext } from '../../context/userState';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Name, TitleContainer, Container, ChartContainer, List, ListItem, TitleListItem, Option, Number, QuestionTitle, ButtonContainer } from './styles';
import { useTheme } from 'styled-components';
import { QuestionContext } from '../../context/questionState';
import { saveResultOnStorage } from '../../services/storage';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type QuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const Result: React.FC = () => {
  const { state } = useContext(UserContext);
  const { state: questionState } = useContext(QuestionContext);

  const navigate = useNavigate();
  const theme = useTheme();

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Acertos', 'Erros'],
    datasets: [
      {
        label: 'Acertos e Erros',
        data: [numberOfCorrectAnswers(), numberOfWrongAnswers()],
        backgroundColor: [
          theme.colors.blue,
          theme.colors.grey,
        ],
        borderColor: [
          'transparent',
          'transparent',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
  };

  useEffect(() => {
    async function saveResult(): Promise<void> {
      await saveResultOnStorage({
        questions: questionState.questions,
        answers: questionState.answers,
      });
    }

    saveResult();
  }, []);

  function numberOfCorrectAnswers(): number {
    return questionState.answers.reduce((acc: number, answer: any) => {
      const question: QuestionType = questionState.questions
        .find((one: QuestionType) => one.question === answer.question);

      if (question.correct_answer === answer.answer) {
        return acc + 1;
      }

      return acc + 0;
    }, 0);
  }

  function numberOfWrongAnswers(): number {
    return questionState.answers.reduce((acc: number, answer: any) => {
      const question: QuestionType = questionState.questions
        .find((one: QuestionType) => one.question === answer.question);

      if (question.correct_answer !== answer.answer) {
        return acc + 1;
      }

      return acc + 0;
    }, 0);
  }

  function getOptionClassName(option: string, correctAnswer: string, selectedAnswer: string): string {
    if (selectedAnswer === correctAnswer && correctAnswer === option) {
      return 'correct';
    }

    if (selectedAnswer === option && selectedAnswer !== correctAnswer) {
      return 'wrong';
    }

    if (option === correctAnswer) {
      return 'selected'
    }

    return '';
  }

  function renderListItem(item: QuestionType, index: number): React.ReactElement {
    const options: string[] = [
      item?.correct_answer && item.correct_answer,
      ...(item?.incorrect_answers || []),
    ];

    const selectedAnswer: string = questionState.answers
      .find((one: any) => one?.question === item?.question)?.answer || '';

    return (
      <ListItem key={index.toString()}>
        <QuestionTitle>Pergunta #{index + 1}</QuestionTitle>
        <TitleListItem>{item?.question}</TitleListItem>
        {options.map((option: string, indexOption: number) => (
          <Option className={getOptionClassName(option, item?.correct_answer, selectedAnswer)}>
            <Number className='hover-number'>{indexOption + 1}</Number>
            {option}
          </Option>
        ))}
      </ListItem>
    );
  }

  return (
    <Page alignItems='unset' justifyContent='unset'>
      <Container>
        <TitleContainer>
          <Title>Falaa<Name>{state.name}</Name>!</Title>
          <Title>Espero que tenha curtido a experiencia!</Title>
          <Title>Sem mais delongas, seu resultado:</Title>
        </TitleContainer>
        <ChartContainer>
          <Doughnut data={data} options={chartOptions} />
        </ChartContainer>
        <List>
          {questionState?.questions.map(renderListItem)}
        </List>
        <ButtonContainer>
          <Button
            variant="contained"
            style={{
              background: theme.colors.blue,
              boxShadow: 'unset',
            }}
            onClick={() => navigate('/select-questions')}
          >
            Tentar denovo
          </Button>
        </ButtonContainer>
      </Container>
    </Page>
  );
}

export default Result;