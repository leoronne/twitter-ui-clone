import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import user1 from '~/assets/img/user1.jpg';
import user2 from '~/assets/img/user3.jpg';
import user3 from '~/assets/img/user2.jpg';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper data-tip="Search something on Twitter">
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Cyhi" nickname="@cyhi" avatar={user1} />,
              <FollowSuggestion name="Luyki Ronne" nickname="@luikyronne" avatar={user3} />,
              <FollowSuggestion name="Hannah Montanha" nickname="@hannah" avatar={user2} />,
            ]}
          />
          <List title="What’s happening" elements={[<News />, <News />, <News />, <News />, <News />, <News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
