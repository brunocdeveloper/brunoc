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

  .transition-btn {
    height: 50px;
    align-self: center;
    background: #282A35;
    border: none;
    color: #FFFFFF;
    font-size: 25px;
    text-decoration: none;
    border-radius: 12px;
  }

  .transition-btn:hover {
    border: 2px solid white;
  }

  .shadowLeft {
    box-shadow: -11px -2px 1em black;
  }

  .upEffect:hover {
    border: 1px solid #E5E5E5;
  }
`
const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 328px;
  height: 404px;
  margin: 25px;

  :nth-of-type(2) {
    margin-top: -50px;
  }

  .name-btn {
    position: absolute;
    align-self: flex-end;
    height: 50px;
    font-size: 30px;
    color: white;
    background: #147083;
    border: 3px solid;
    width: 100%;
  }
  .name-btn:hover {
    background-color: #282A35;
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
      <button className="transition-btn" type="button" onClick={ nextProject }>Anterior</button>
      <Cards className='shadowLeft upEffect'>
        <img 
          src={ actualCard.image }
          alt={ actualCard.image }
          onClick={ nextProject }/>
        <button className="name-btn">{ actualCard.nome }</button>

      </Cards>
      <Cards className='shadowLeft upEffect'>
        <img src={ nextCard.image } alt={ nextCard.image } />
        <button className="name-btn">{ nextCard.nome }</button>
      </Cards>
      <Cards className='shadowLeft upEffect'>
        <img
          src={ lastCard.image }
          alt={ lastCard.image }
          onClick={ lastProject }
        />
        <button className="name-btn">{ `${lastCard.nome}` }</button>

      </Cards>
      <button className="transition-btn" type="button" onClick={ lastProject }>Próximo</button>
    </Container>
  )
}

export default CardsCarousel;
