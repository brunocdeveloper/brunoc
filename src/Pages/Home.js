import React from 'react';
import styled from 'styled-components';
import ContainerAbout from '../components/ContainerAbout';
import ContainerProjects from '../components/ContainerProjects';
import MainHeader from '../components/MainHeader';

const Container = styled.div`
  background-color: #E5E5E5;
  height: 2592px;
  width: 1366px;
  margin: auto;
`

function Home() {
  return (
    <Container>
      <MainHeader />
      <ContainerAbout />
      <ContainerProjects/>
    </Container>
  )
}

export default Home;
