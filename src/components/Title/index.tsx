import React from 'react';

import { Text } from './styles';

type TitleType = {
  children: any;
};

const Title: React.FC<TitleType> = ({ children }) => {
  return <Text>{children}</Text>;
}

export default Title;