import React from 'react';
import styled from 'styled-components';
import CardsCarousel from './CardsCarousel';


const Container = styled.div`
  width: 1366px;
  height: 800px;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function ContainerProjects() {

  return (
    <Container>
        <CardsCarousel />
    </Container>
  )
}

export default ContainerProjects;