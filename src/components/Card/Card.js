import React, { Component } from 'react';

class Card extends Component {

  render() {

    const { house } = this.props

    return (
      <div className='Card'>
      { house &&
        <div>
          <h1>{house.name}</h1>
          <p>{house.founded}</p> 
          <p>{house.seats}</p>
          <p>{house.titles}</p>
          <p>{house.coatOfArms}</p>
          <p>{house.ancestralWeapons}</p>
          <p>{house.words}</p>
        </div>
      }
      </div>
    )  
  }
}

export default Card
