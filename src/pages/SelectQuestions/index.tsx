import { Formik } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { UserContext } from '../../context/userState';

import { FormStyled, Name } from './styles';

type FormType = {
  numberOfQuestions: number;
};

const SelectQuestions: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

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
    </Page>
  )
}

export default SelectQuestions;