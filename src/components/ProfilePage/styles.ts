import styled, { css } from 'styled-components';

import bgheader from '~/assets/img/bgheader.jpeg';
import { LocationOn, Cake, Link, Calendar } from '../../styles/Icons';
import Button from '../Button';

import avatar from '~/assets/img/avatar.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: url(${bgheader});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;

  img {
    width: 100%;
    height: min(33vw, 199px);
  }
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: url(${avatar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  z-index: 1;
  cursor: pointer;
  transition: filter 0.6s ease-in-out;
  :hover {
    filter: brightness(0.9);
    transition: filter 0.6s ease-in-out;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }

    > a:hover {
      text-decoration: underline;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);
      display: flex;
      align-items: center;

      > a {
        text-decoration: none;
        color: var(--twitter);
      }

      > a:hover {
        text-decoration: underline;
        color: var(--twitter);
      }

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const LinkIcon = styled(Link)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;
export const CalendarIcon = styled(Calendar)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
