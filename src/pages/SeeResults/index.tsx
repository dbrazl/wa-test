import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { QuestionContext } from '../../context/questionState';
import theme from '../../global/theme';
import { getItemFromStorage } from '../../services/storage';

import { ButtonContainer, Container, List, ListItem } from './styles';

const SeeResults: React.FC = () => {
  const [results, setResults] = useState([]);
  const { dispatch } = useContext(QuestionContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function getResultsFromStorage(): Promise<void> {
      const resultsDB: any = await getItemFromStorage('results');

      if (resultsDB?.length > 0) {
        setResults(resultsDB)
      }
    }

    getResultsFromStorage();
  }, []);

  function onClickOverResult(result: any, index: number): void {
    dispatch({
      type: '@QUESTION/SAVE_QUESTIONS',
      payload: {
        questions: result.questions,
      }
    });

    dispatch({
      type: '@QUESTION/SAVE_ANSWERS',
      payload: {
        answers: result.answers,
      }
    });

    navigate(`/result/${index}`);
  }

  function renderListItem(result: any, index: number): React.ReactElement {
    return (
      <ListItem
        onClick={() => onClickOverResult(result, index)}
      >
        Questionário <strong>#{index + 1}</strong>
      </ListItem>
    );
  }
  
  return (
    <Page alignItems='unset' justifyContent='unset'>
      <Container>
        <Title>Resultados</Title>
        <List>
          {results.map(renderListItem)}
        </List>
        <ButtonContainer>
          <Button
            variant='contained'
            style={{
              background: theme.colors.blue,
              boxShadow: 'unset',
            }}
            onClick={() => navigate('/select-questions')}
          >
            Voltar
          </Button>
        </ButtonContainer>
      </Container>
    </Page>
  );
}

export default SeeResults;