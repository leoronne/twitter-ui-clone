import React from 'react';
import { Tooltip } from '@material-ui/core';

import Tweet from '../Tweet';

import { useStyles } from '../../styles/MaterialUI';
import { Container, Tabs, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Tabs>
        <Tooltip title="User tweets" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Tab className="active">Tweets</Tab>
        </Tooltip>
        <Tooltip title="User tweets and replies" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Tab>Tweets & replies</Tab>
        </Tooltip>
        <Tooltip title="User media" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Tab>Media</Tab>
        </Tooltip>
        <Tooltip title="User likes" placement="bottom" arrow classes={{ tooltip: classes.tooltip }}>
          <Tab>Likes</Tab>
        </Tooltip>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet showPicture />
        <Tweet />
        <Tweet showPicture />
        <Tweet showPicture />
      </Tweets>
    </Container>
  );
};

export default Feed;
