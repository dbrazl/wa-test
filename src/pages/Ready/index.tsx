import React, { useEffect } from 'react';
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Page from '../../components/Page';
import Title from '../../components/Title';

import { ButtonsContainer, TitleContainer } from './styles';

const Ready: React.FC = () => {  
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(event: any): void {
      if (event.key === 'Enter') {
        navigate('/questions');
      }
    }
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Page>
      <TitleContainer>
        <Title>Beleza! Está pronto para começar?</Title>
      </TitleContainer>
      <ButtonsContainer>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.colors.blue,
            boxShadow: 'none'
          }}
          onClick={() => navigate('/questions')}
        >
          Iniciar
        </Button>
        <Button
          variant="text"
          style={{
            color: theme.colors.blue,
          }}
          onClick={() => navigate('/select-questions')}
        >
          Cancelar
        </Button>
      </ButtonsContainer>
    </Page>
  );
}

export default Ready;