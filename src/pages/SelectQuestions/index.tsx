import { Button } from '@mui/material';
import { Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import Input from '../../components/Input';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { UserContext } from '../../context/userState';
import { getItemFromStorage } from '../../services/storage';

import { ButtonContainer, FormStyled, Name } from './styles';

type FormType = {
  numberOfQuestions: number;
};

const SelectQuestions: React.FC = () => {
  const [hasResults, setHasResults] = useState<boolean>(false);
  const { state, dispatch } = useContext(UserContext);

  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    async function hasNameStoraged(): Promise<void> {
      if (!state.name) {
        const name: string = await getItemFromStorage('name');

        if (name) {
          dispatch({
            type: '@USER/CHANGE_NAME',
            payload: {
              name,
            }
          });
        }
      }
    }

    hasNameStoraged();
  }, [state]);

  const initialFormValues: FormType = {
    numberOfQuestions: 0,
  };

  function onSubmitForm(values: any): void {
    if (!Number(values.numberOfQuestions)) {
      toast.error('Informe um número inteiro!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch({
        type: '@USER/CHANGE_NUMBER_OF_QUESTIONS',
        payload: {
          numberOfQuestions: parseInt(values.numberOfQuestions),
        }
      });
      navigate('/ready');
    }
  }

  useEffect(() => {
    async function hasResultsOnStorage(): Promise<void> {
      const results: any = await getItemFromStorage('results');

      if (results?.length > 0) {
        setHasResults(true);
      }
    }

    hasResultsOnStorage();
  }, []);


  return (
    <Page>
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSubmitForm}
      >
        {({ values }) => (
          <FormStyled>
            <Title>
              <Name>{state.name}</Name>, quantas perguntas você <br /> deseja responder?</Title>
            <Input
              type="text"
              name="numberOfQuestions"
              value={values.numberOfQuestions !== 0 ? values.numberOfQuestions.toString() : ''}
              autoFocus
              autoComplete="off"
            />
          </FormStyled>
        )}
      </Formik>
      
      {hasResults ? (
        <ButtonContainer>
          <Button
            variant="contained"
            style={{
              background: theme.colors.blue,
              boxShadow: 'unset',
            }}
            onClick={() => navigate('/old/results')}
          >
            Ver resultados antigos
          </Button>
        </ButtonContainer>
      ) : <></> }
    </Page>
  )
}

export default SelectQuestions;