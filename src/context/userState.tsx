import React, { createContext, useReducer } from 'react';
import userReducer from './userReducer';

const initialState: any = {
  name: '',
};

export const UserContext = createContext(initialState);

type UserProviderType = {
  children: React.ReactElement | React.ReactElement[];
};

const UserProvider: React.FC<UserProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;