import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);

  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--search);
  border: 1px solid transparent;
  transition: var(--transition-slow);
  outline: 0;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -35px;
    left: 15px;
    z-index: 1;

    transition: var(--transition-slow);
  }

  &:focus {
    border: 1px solid var(--twitter);
    transition: var(--transition-slow);

    ~ svg {
      fill: var(--twitter);
      transition: var(--transition-slow);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
