import React from 'react';

import { MenuBar, Main, Sidebar } from '../components';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
