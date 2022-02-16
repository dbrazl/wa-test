import { Formik } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userState';

import Page from '../../components/Page';
import Title from '../../components/Title';
import Input from '../../components/Input';

import { FormStyled } from './styles';

type FormType = {
  name: string;
};

const Name: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const initialFormValues: FormType = {
    name: '',
  };  

  function onSubmitForm(values: any): void {
    dispatch({
      type: '@USER/CHANGE_NAME',
      payload: {
        name: values.name,
      }
    });

    navigate('select-questions');
  }

  return (
    <Page>
      <Formik
        initialValues={initialFormValues}
        onSubmit={onSubmitForm}
      >
        {({ values }) => (
          <FormStyled>
            <Title>Olá! Qual é o seu nome?</Title>
            <Input
              type="text"
              name="name"
              value={values.name}
              autoFocus
              autoComplete="off"
            />
          </FormStyled>
        )}
      </Formik>
    </Page>
  );
}

export default Name;