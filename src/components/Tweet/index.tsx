import React from 'react';

import twitter from '~/assets/img/twitter.jpg';
import instagram from '~/assets/img/instagram.jpg';
import instagrampic from '~/assets/img/instagrampic.jpeg';
import rocketseat from '~/assets/img/rocketseat.jpg';
import rocketseatpic from '~/assets/img/rocketseatpic.jpg';

import {
  Container,
  Retweeted,
  RTHeaderIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from './styles';

interface Props {
  showPicture?: boolean;
}

export interface AvatarProps {
  avatar: string;
}

const Tweet: React.FC<Props> = ({ showPicture = false }) => {
  const tweets = [
    {
      name: 'Twitter',
      user: '@Twitter',
      avatar: twitter,
      message: 'This is awesome!',
      picture: instagrampic,
    },
    {
      name: 'Instagram',
      user: '@instagram',
      avatar: instagram,
      message: `Bold 🌈, Bright ✨, Beautiful 💋!`,
      picture: instagrampic,
    },
    {
      name: 'Rocketseat',
      user: '@rocketseat',
      avatar: rocketseat,
      message: `Todo mundo tem algo para somar e contribuir. Você também. 🚀💜`,
      picture: rocketseatpic,
    },
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentTweet = tweets[Math.floor(Math.random() * tweets.length)];
  return (
    <Container>
      <Retweeted>
        <RTHeaderIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar
          avatar={currentTweet.avatar}
          onClick={() => window.open(`https://twitter.com/${currentTweet.user}`, 'blank')}
          data-tip={`Go to ${currentTweet.user} profile`}
        />

        <Content>
          <Header>
            <strong>{currentTweet.name}</strong>
            <span onClick={() => window.open(`https://twitter.com/${currentTweet.user}`, 'blank')} data-tip={`Go to ${currentTweet.user} profile`}>
              {currentTweet.user}
            </span>
            <Dot />
            <time>{`${months[Math.floor(Math.random() * months.length)]} ${Math.floor(Math.random() * 28)}`} </time>
          </Header>

          <Description>{currentTweet.message}</Description>
          {showPicture ? <ImageContent avatar={currentTweet.picture}/> : null}

          <Icons>
            <Status data-tip="Show replies">
              <CommentIcon />
              {Math.floor(Math.random() * 5000)}
            </Status>
            <Status data-tip="Retweet">
              <RetweetIcon />
              {Math.floor(Math.random() * 5000)}
            </Status>
            <Status data-tip="Like Tweet">
              <LikeIcon />
              {Math.floor(Math.random() * 5000)}
            </Status>
            <Status data-tip="Share Tweet">
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
