import React, { useContext, useEffect, useState } from 'react';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { UserContext } from '../../context/userState';
import api from '../../services/api';
import googleApi from '../../services/googleApi';
import LinearProgress from '@mui/material/LinearProgress';

import { Container, Number, List, ListItem, Option, TitleListItem, ProgressContainer } from './styles';

type QuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type QuestionAnswerd = {
  question: string;
  answer: string;
};

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [actualQuestionIndex, setActualQuestionIndex] = useState<number>(0);
  const [questionsAnswerd, setQuestionAnswerd] = useState<QuestionAnswerd[]>([]);
  const { state } = useContext(UserContext);

  async function translateTerm(term: string): Promise<string> {
    console.log(term.concat('\n\n'), term.replace('/&(lt|gt|quot|paring);/g', ''));
    const termTreated: string = term.replace(/&(lt|gt|quot);/g, function (m, p) { 
      return '';
    }).replace(/&#(039);/g, function (m, p) { 
      return '';
    });

    const GOOGLE_KEY: string = 'AIzaSyBo-mra3xVhkXznrLZOnZKE08Kt4nK-Sdo';
    const result: any = await googleApi.post(`?target=pt&key=${GOOGLE_KEY}&q=${termTreated}`);
    return result.data.data.translations[0].translatedText;
  }

  useEffect(() => {
    async function getQuestions(): Promise<void> {
      try {
        const response = await api.get(`?amount=${state.numberOfQuestions}`);
        const questionsTranslateds: QuestionType[] = await Promise.all(
          response.data.results.map(
            async (question: QuestionType) => ({
              category: await translateTerm(question?.category),
              type: await translateTerm(question?.type),
              difficulty: await translateTerm(question?.difficulty),
              question: await translateTerm(question?.question),
              correct_answer: await translateTerm(question?.correct_answer),
              incorrect_answers: await Promise.all(
                question.incorrect_answers.map(
                  async (answer: string) => await translateTerm(answer),
                )
              )
            })
          )
        );
        setQuestions(questionsTranslateds);
      } catch(error) {
        console.error(error);
      }
    }

    getQuestions();
  }, [state]);

  function renderListItem(item: QuestionType, index: number): React.ReactElement {
    const options: string[] = [
      item?.correct_answer && item.correct_answer,
      ...(item?.incorrect_answers || []),
    ];

    let hover = false;

    return (
      <ListItem key={index.toString()}>
        <TitleListItem>{item?.question}</TitleListItem>
        {options.map((option: string, indexOption: number) => (
          <Option onClick={() => registerAnswer(item.question, option)}>
            <Number className='hover-number'>{indexOption + 1}</Number>
            {option}
          </Option>
        ))}
      </ListItem>
    );
  }

  function registerAnswer(question: string, answer: string): void {
    setQuestionAnswerd([
      ...questionsAnswerd, 
      {
        question,
        answer,
      }
    ]);

    setActualQuestionIndex(actualQuestionIndex + 1);
  }

  const progress: number = (( actualQuestionIndex ) / questions.length) * 100;

  return (
    <Page justifyContent='unset' alignItems='unset'>
      <Container>
        <ProgressContainer>
          <LinearProgress variant="determinate" value={progress} />
        </ProgressContainer>
        <Title>Pergunta #{actualQuestionIndex + 1}</Title>
        <List>
          {renderListItem(questions[actualQuestionIndex], actualQuestionIndex)}
        </List>
      </Container>
    </Page>
  );
}

export default Questions;