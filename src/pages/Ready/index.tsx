import React from 'react';
import { useTheme } from 'styled-components'

import Button from '@mui/material/Button';
import Page from '../../components/Page';
import Title from '../../components/Title';

import { ButtonsContainer } from './styles';

const Ready: React.FC = () => {  
  const theme = useTheme();

  return (
    <Page>
      <Title>Beleza! Está pronto para começar?</Title>
      <ButtonsContainer>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.colors.blue,
            boxShadow: 'none'
          }}
        >
          Iniciar
        </Button>
        <Button
          variant="text"
          style={{
            color: theme.colors.blue,
          }}
        >
          Cancelar
        </Button>
      </ButtonsContainer>
    </Page>
  );
}

export default Ready;