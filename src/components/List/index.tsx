import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
