import React from 'react';
import Card from '../Card/Card.js';
import { connect } from 'react-redux';

export const CardContainer = ({houses}) => {

  const displayHouses = houses.map((house, index) => {
    return <Card house={house} key={index}/>
  })

  return (
    <div className='Container'>
      {displayHouses}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer)