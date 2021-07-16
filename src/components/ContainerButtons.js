import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 75%;
  left: -80px;
`

const ButtonMoreInfo = styled.button`
  position: absolute;
  width: 260px;
  height: 47px;
  left: 166px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 10px;
  font-size: 18px;
`
const ButtonMyNetworks = styled.button`
  position: absolute;
  width: 297px;
  height: 47px;
  left: 476px;
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 10px;
  font-size: 18px;
`
function ContainerButtons() {
  return (
    <Container>
      <Link to="/moreabout"><ButtonMoreInfo>Mais sobre</ButtonMoreInfo></Link>
      <Link to="/mynetworks"><ButtonMyNetworks>Minhas Redes</ButtonMyNetworks></Link>
    </Container>
  )
}

export default ContainerButtons;
