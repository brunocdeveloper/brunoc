import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerButton = styled.div`
  position: absolute;
  align-self: flex-end;
  top: 6%;
  right: 2%;
  margin: 0 6px;
`
const Inicio = styled.button`
  background: none;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
  margin: 0 8px;
`
const Projetos = styled.button`
  background: none;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
  margin: 0 8px;
`
const Contatos = styled.button`
  background: none;
  color: #FFFFFF;
  border: none;
  font-size: 28px;
  margin: 0 8px;
`
function HeaderButton() {
  return(
    <ContainerButton>
      <Link to="/"><Inicio>Inicio</Inicio></Link>
      <Link to="/projects"><Projetos>Projetos</Projetos></Link>
      <Link to="/contacts"><Contatos>Contatos</Contatos></Link>
    </ContainerButton>
  )
}

export default HeaderButton;
