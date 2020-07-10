import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  FileList2,
  Bookmark,
  Hash,
  DotsCircleHorizontal,
  Tweet,
  Twitter,
} from '../../styles/Icons';

import avatar from '~/assets/img/avatar.jpg';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  justify-content: center;
  position: relative;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    > svg {
      margin-left: 10px;
    }
    width: auto;
    height: auto;
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;
    position: relative;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const HashIcon = styled(Hash)`
  ${iconCSS}
`;
export const DotsIcon = styled(DotsCircleHorizontal)`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
  fill: var(--white);
`;
export const BookMarkIcon = styled(Bookmark)`
  ${iconCSS}
`;
export const ListIcon = styled(FileList2)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;
export const TwitterIcon = styled(Twitter)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;
export const TweetIcon = styled(Tweet)`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 12px;
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: url(${avatar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: filter 0.6s ease-in-out;
  :hover {
    filter: brightness(0.9);
    transition: filter 0.6s ease-in-out;
  }
`;

export const ProfileData = styled.div`
  display: none;
  cursor: pointer;
  transition: filter 0.6s ease-in-out;
  :hover {
    filter: brightness(0.9);
    transition: filter 0.6s ease-in-out;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
