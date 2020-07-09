import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  const trends = [
    '#MasterChef',
    '#PrideGaming',
    'Gado do Bolsonaro',
    '#DragRace',
    'Doom Patrol',
    'Resenha',
    'Rocketseat',
    '#NLW',
    'Ranoroxa na Nimo',
    '#Pokémon',
    'Quarentena',
    'UI Clone',
    'Eita',
    'Reactjs',
    'Styled Components',
    'TypeScript',
  ];
  return (
    <Container>
      <span>Brazil Trends</span>
      <strong>{trends[Math.floor(Math.random() * trends.length)]}</strong>
    </Container>
  );
};

export default News;
