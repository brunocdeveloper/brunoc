import React from 'react';
import styled from 'styled-components';

function ContainerCarousel({ data }) {
  return data.map((items) => (
    <div>
      <p>{items.nome}</p>
      <p>{items.descricao}</p>

    </div>
  ))

}

export default ContainerCarousel;
