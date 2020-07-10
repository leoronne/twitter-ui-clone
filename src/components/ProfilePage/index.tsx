import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton, LinkIcon, CalendarIcon } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar onClick={() => window.open('https://twitter.com/leoronne', 'blank')} data-tip="Go to @leoronne profile on Twitter" />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>𝕽𝖔𝖓𝖓𝖊</h1>
        <h2>@leoronne</h2>

        <p>
          Product Manager at{' '}
          <a href="https://br.visor.io" target="_blank" rel="noopener noreferrer">
            @Visor
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <LinkIcon />
            <a href="https://instagram.com/leoronne" target="_blank" rel="noopener noreferrer">
              instagram.com/leoronne
            </a>
          </li>
          <li>
            <CakeIcon />
            Born March 22, 1995
          </li>
          <li>
            <CalendarIcon />
            Joined January 2011
          </li>
        </ul>

        <Followage>
          <span>
            <strong>1993</strong> Following
          </span>
          <span>
            <strong>261</strong> Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
