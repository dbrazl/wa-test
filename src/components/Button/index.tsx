import React from 'react';

import { Container } from './styles';

type ButtonType = {
  children: string;
};

const Button: React.FC<ButtonType> = ({ children }) => {
  return <Container>{children}</Container>;
}

export default Button;