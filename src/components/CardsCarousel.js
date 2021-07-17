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
`
const Cards = styled.div`
  width: 328px;
  height: 404px;
  background-color: green;
  margin: 25px;

  :nth-of-type(2) {
    margin-top: -50px;
  }
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
    setLastCard(data[indexNext -1])
    console.log(indexNext)
    if (indexNext === lastPosition) setNextCard(data[0]);

  }

  return (
    <Container>
      <button type="button" onClick={ nextProject }> proximo </button>
      <Cards>
        <img src={ actualCard.image } alt={ actualCard.image } />
        <p>{actualCard.nome}</p>
      </Cards>
      <Cards>
        <img src={ nextCard.image } alt={ nextCard.image } />
        <p>{ nextCard.nome }</p>
      </Cards>
      <Cards>
        <img src={ lastCard.image } alt={ lastCard.image } />
        <p>{ lastCard.nome }</p>
      </Cards>
    </Container>
  )
}

export default CardsCarousel;
