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
  const [actualCard, setActualCard] = useState(data[lastPosition - 1])
  const [lastCard, setLastCard] = useState(data[lastPosition - 2])
  const [nextCard, setNextCard] = useState(data[lastPosition - 3])

  function nextProject() {
    const cardList = data.map((item) => item.image)


    const indexActual = cardList.indexOf(actualCard.image) - 1
    setActualCard(data[indexActual])
    console.log(indexActual)
    if (indexActual === -1) setActualCard(data[lastPosition -1])


    /* const indexNext = cardList.indexOf(nextCard.image) + 1 
    setNextCard(data[indexNext])
    if (indexNext === data.length) setNextCard(data[0]) */
    
    /* const indexLast = cardList.indexOf(nextCard.image)
    setNextCard(data[indexLast -1 ]) */
    
    /* console.log(indexLast)
    setLastCard(data[indexActual + 1 ]) */
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
        <img src={ lastCard.image } alt={ lastCard.name }/>
        <p>{lastCard.nome}</p>
      </Cards>
    </Container>
  )
}

export default CardsCarousel;
