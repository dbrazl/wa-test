import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/Page';

import { FormStyled, Input, Title } from './styles';

type FormType = {
  name: string;
};

const Name: React.FC = () => {
  const navigate = useNavigate();

  const initialFormValues: FormType = {
    name: '',
  };  

  function onSubmitForm(values: any): void {
    console.log(values);
    console.log(navigate);
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