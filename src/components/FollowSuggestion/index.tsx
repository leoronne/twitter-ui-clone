import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  avatar: string;
}
export interface AvatarProps {
  avatar: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, avatar }) => {
  return (
    <Container>
      <div>
        <Avatar avatar={avatar} />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
