import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
`
const Welcome = styled.h1`
  width: 100%;
  font-Size: 60px;
  color: #FFFFFF;
`
const SubTitle = styled.h3`
  position: absolute;
  color: #FFFFFF;
  weight: 400;
  font-weight: normal;
  font-size: 28px;
  left: 80px;
  top: 88px;
  width: 110%;
`
function HeaderTitle() {
  return (
    <Container>
      <Welcome>Bem Vindo!</Welcome>
      <SubTitle>Eu sou um <b>Desenvolvedor</b></SubTitle>
    </Container>
  )
}

export default HeaderTitle;
