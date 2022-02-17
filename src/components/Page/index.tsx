import React from 'react';

import { Container } from './styles';

type PageType = {
  children: React.ReactElement | React.ReactElement[];
  justifyContent?: string;
  alignItems?: string;
};

const Page: React.FC<PageType> = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
}) => {
  return (
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  );
}

export default Page;