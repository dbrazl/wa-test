import React from 'react';

import { InputText } from './styles';

type InputType = {
  type?: string;
  name?: string;
  value?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  pattern?: string | null;
};

const Input: React.FC<InputType> = ({
  type = 'text',
  name = '',
  value = '',
  autoFocus = false,
  autoComplete = true,
  pattern = null,
}) => {
  return (
    <InputText
      type={type}
      name={name}
      value={value}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      pattern={pattern}
    />
  );
}

export default Input;