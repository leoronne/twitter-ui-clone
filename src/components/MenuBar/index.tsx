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
  TwitterIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <TwitterIcon />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <HashIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <BookMarkIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Lists</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton>
          <DotsIcon />
          <span>More</span>
        </MenuButton>

        <Button>
          <TweetIcon />
          <span>Tweet</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>𝕽𝖔𝖓𝖓𝖊</strong>
          <span>@leoronne</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
