import React from 'react';
import styled from 'styled-components';
import HeaderButton from './HeaderButtons';
import HeaderTitle from './HeaderTitle';

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 1319px;
  height: 500px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 500px;
    width: 1319px;
  }
`

function HeaderImage() {
  return (
    <Container>
      <HeaderTitle />
      <HeaderButton />
      <img src="https://i1.wp.com/emotioncard.com.br/wp-content/uploads/2019/04/plano-de-fundo-preto28.jpg?fit=2560%2C1600&ssl=1" />
    </Container>
  )
}

export default HeaderImage;