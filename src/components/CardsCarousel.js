import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from '../data';

const Container = styled.div`
  position: absolute;
  display: flex;

  img {
    width: 328px;
    height: 404px;
  }  

  button {
    height: 50px;
    align-self: center;
    background: #282A35;
    border: none;
    color: #FFFFFF;
    font-size: 25px;
    text-decoration: none;
    border-radius: 12px;
  }
`
const Cards = styled.div`
  width: 328px;
  height: 404px;
  margin: 25px;

  :nth-of-type(2) {
    margin-top: -50px;
  }
`
const TitleCarousel = styled.h1`
  position: absolute;
  margin: -15% 22%;
  width: 60%;
  font-size: 32px;
`

function CardsCarousel() {
  const [lastPosition, setPosition] = useState(data.length)
  const [actualCard, setActualCard] = useState(data[0])
  const [nextCard, setNextCard] = useState(data[lastPosition - 1])
  const [lastCard, setLastCard] = useState(data[2])

  function nextProject() {
    const cardList = data.map((item) => item.image);

    const indexActual = cardList.indexOf(actualCard.image) + 1;
    setActualCard(data[indexActual]);
    if (indexActual === lastPosition) setActualCard(data[0]);

    const indexNext = cardList.indexOf(nextCard.image) + 1;
    setNextCard(data[indexNext]);
    setLastCard(data[indexNext -1]);
    if (indexNext === lastPosition) setNextCard(data[0]);
  }

  function lastProject() {
    const cardList = data.map((item) => item.image);

    const indexActual = cardList.indexOf(actualCard.image) - 1; 
    setActualCard(data[indexActual]);
    if (indexActual === -1) setActualCard(data[lastPosition -1]);

    const indexNext = cardList.indexOf(nextCard.image) - 1;
    setNextCard(data[indexNext]);
    if (indexNext === -1) setNextCard(data[lastPosition - 1]);

    const indexLast = cardList.indexOf(lastCard.image) -1;
    setLastCard(data[indexLast]);
    if (indexLast === -1) setLastCard(data[lastPosition -1]);

  }

  return (
    <Container>
      <TitleCarousel>Conheça alguns projetos no carrossel abaixo</TitleCarousel>
      <button type="button" onClick={ nextProject }>Anterior</button>
      <Cards>
        <img 
          src={ actualCard.image }
          alt={ actualCard.image }
          onClick={ nextProject }/>
        <p>{actualCard.nome}</p>
      </Cards>
      <Cards>
        <img src={ nextCard.image } alt={ nextCard.image } />
        <p>{ nextCard.nome }</p>
      </Cards>
      <Cards>
        <img
          src={ lastCard.image }
          alt={ lastCard.image }
          onClick={ lastProject }
        />
        <p>{ lastCard.nome }</p>
      </Cards>
      <button type="button" onClick={ lastProject }>Próximo</button>
    </Container>
  )
}

export default CardsCarousel;
