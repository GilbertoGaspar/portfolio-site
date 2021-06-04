import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

export default function Carousel(props) {
  const [items, setItems] = useState(props.items);

  const handleCardClick = id => {
    let cards = [...items];

    cards[id].selected = !cards[id].selected;

    cards.map(item => {
      if (item.id !== id) {
        item.selected = false;
      }
      return item;
    });
    setItems(cards);
  };

  const makeItems = items => {
    return items.map(item => (
      <Card item={item} click={handleCardClick} key={item.id} />
    ));
  };
  return (
    <Container fluid='true'>
      <Row className='justify-content-around'>{makeItems(items)}</Row>
    </Container>
  );
}
