import React from 'react';
import { Tooltip } from '@material-ui/core';

import kFormatter from '../../utils/kFormatter';

import twitter from '~/assets/img/twitter.jpg';
import twitterpic from '~/assets/img/twitterpic.jpg';
import instagram from '~/assets/img/instagram.jpg';
import instagrampic from '~/assets/img/instagrampic.jpeg';
import rocketseat from '~/assets/img/rocketseat.jpg';
import rocketseatpic from '~/assets/img/rocketseatpic.jpg';

import { useStyles } from '../../styles/MaterialUI';
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
  const classes = useStyles();
  const tweets = [
    {
      name: 'Twitter',
      user: '@Twitter',
      avatar: twitter,
      message: 'This is awesome!',
      picture: twitterpic,
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
        <Tooltip title={`Go to ${currentTweet.user} profile`} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Avatar avatar={currentTweet.avatar} onClick={() => window.open(`https://twitter.com/${currentTweet.user}`, 'blank')} />
        </Tooltip>

        <Content>
          <Header>
            <strong>{currentTweet.name}</strong>
            <Tooltip title={`Go to ${currentTweet.user} profile`} placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <span onClick={() => window.open(`https://twitter.com/${currentTweet.user}`, 'blank')}>{currentTweet.user}</span>
            </Tooltip>
            <Dot />
            <time>{`${months[Math.floor(Math.random() * months.length)]} ${Math.floor(Math.random() * 28)}`}</time>
          </Header>

          <Description>{currentTweet.message}</Description>
          {showPicture ? <ImageContent avatar={currentTweet.picture} /> : null}

          <Icons>
            <Tooltip title="Show replies" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <CommentIcon />
                {kFormatter(Math.floor(Math.random() * 5000))}
              </Status>
            </Tooltip>

            <Tooltip title="Retweet" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <RetweetIcon />
                {kFormatter(Math.floor(Math.random() * 5000))}
              </Status>
            </Tooltip>

            <Tooltip title="Like Tweet" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <LikeIcon />
                {kFormatter(Math.floor(Math.random() * 5000))}
              </Status>
            </Tooltip>

            <Tooltip title="Share Tweet" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
              <Status>
                <ShareIcon />
              </Status>
            </Tooltip>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
