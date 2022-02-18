import React, { createContext, useReducer } from 'react';
import questionReducer from './questionReducer';

const initialState: any = {
  questions: [],
  answers: [],
};

export const QuestionContext = createContext(initialState);

type QuestionProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

const QuestionProvider: React.FC<QuestionProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
}

export default QuestionProvider;