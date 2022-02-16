import { Formik } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../../components/Page';
import { UserContext } from '../../context/userState';

import { FormStyled, Input, Title } from './styles';

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