import React from 'react';

import { Container } from './styles';

type PageType = {
  children: React.ReactElement | React.ReactElement[];
};

const Page: React.FC<PageType> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Page;