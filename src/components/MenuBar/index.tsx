import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  BookMarkIcon,
  HashIcon,
  DotsIcon,
  TweetIcon,
  TwitterIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <TwitterIcon />

        <MenuButton data-tip="Go to homepage">
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton data-tip="Explore Twitter">
          <HashIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton data-tip="User notifications">
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton data-tip="User messages">
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton data-tip="Bookmarked items">
          <BookMarkIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton data-tip="User lists">
          <ListIcon />
          <span>Lists</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton data-tip="More options">
          <DotsIcon />
          <span>More</span>
        </MenuButton>

        <Button data-tip="Create new Tweet">
          <TweetIcon />
          <span>Tweet</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar onClick={() => window.open('https://twitter.com/leoronne', 'blank')} data-tip="Go to @leoronne profile on Twitter"/>

        <ProfileData onClick={() => window.open('https://twitter.com/leoronne', 'blank')} data-tip="Go to @leoronne profile on Twitter">
          <strong>𝕽𝖔𝖓𝖓𝖊</strong>
          <span>@leoronne</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
