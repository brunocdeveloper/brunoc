import React from 'react';
import styled from 'styled-components';
import HeaderButton from '../components/HeaderButtons';
import { Container } from '../components/HeaderImage';

export const ReusedContainer = styled(Container)`
  top: 20px;
  height: 10px;
`
function Projects() {
  return (
    <ReusedContainer>
      <HeaderButton />
      <img src="https://i1.wp.com/emotioncard.com.br/wp-content/uploads/2019/04/plano-de-fundo-preto28.jpg?fit=2560%2C1600&ssl=1" />
    </ReusedContainer >
  );
}

export default Projects;
