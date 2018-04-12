import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({houses}) => {

  const displayHouses = houses.map((house, index) => {
    return <Card house={house} key={index}/>
  })

  return (
    <div className='Container'>
      {displayHouses}
    </div>
  )
}

export default CardContainer