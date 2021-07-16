import React from 'react';
import styled from 'styled-components';
import MoreAbout from '../Pages/MoreAbout';
import ContainerButtons from './ContainerButtons';
/* teste */
const Container = styled.div`
  position: relative;
  width: 1400px;
  height: 500px;
  left: 0px;
  top: -15px;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AboutMe = styled.h3`
  position: absolute;
  align-self: flex-start;
  top: 15px;
  left: 90px;
  height: 39px;
  color: black;
  font-size: 28px;
`
const Description = styled.p`
  position: absolute;
  width: 650px;
  height: 289px;
  left: 90px;
  color: black;
  font-size: 22px;
  line-height: 32px;
`
const ImageProfile = styled.img`
  width: 433px;
  height: 636px;
  left: 832.1px;
  top: 496px;
  border-radius: 46px;
  transform: rotate(1deg);
`
function ContainerAbout() {
  return (
    <div>
      <Container> 
        <AboutMe>Sobre Mim</AboutMe>
        <Description>
        Eu sou Bruno Cândido. Entusiasta na área de programação com foco em front-end. Atualmente estudante de Desenvolvimento Web Full-Stack na Trybe e muito grato pelas experiência que estou adiquirindo no curso.
        Clique no link abaixo e saiba mais sobre mim e as habilidades que estou desenvolvendo ao longo da minha trajetória como estudante de programação.
        </Description>
        <ContainerButtons/>
      </Container>
    </div>
  )
}

export default ContainerAbout;
