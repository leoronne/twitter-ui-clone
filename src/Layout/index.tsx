import React from 'react';
import ReactTooltip from 'react-tooltip';

import MenuBar from '../components/MenuBar';
import Main from '../components/Main';
import SideBar from '../components/SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
      <ReactTooltip type="dark" effect="solid" />
    </Container>
  );
};

export default Layout;
