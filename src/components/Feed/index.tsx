import React from 'react';

import Tweet from '../Tweet';

import { Container, Tabs, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab className="active" data-tip="User tweets">
          Tweets
        </Tab>
        <Tab data-tip="User tweets and replies">Tweets & replies</Tab>
        <Tab data-tip="User media">Media</Tab>
        <Tab data-tip="User likes">Likes</Tab>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet showPicture />
        <Tweet />
        <Tweet showPicture />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
