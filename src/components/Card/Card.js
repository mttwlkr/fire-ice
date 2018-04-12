import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const { house } = this.props

    const members = house.swornMembers.map(member => {
      return <li>{member.name}</li>
    })

    const displayMembers = this.state.clicked ? members : '' 

    return (
      <div 
        className='Card'
        onClick={this.handleClick}  
      >

      { house &&
        <div>
          <h1>{house.name}</h1>
          <p>{house.founded}</p> 
          <p>{house.seats}</p>
          <p>{house.titles}</p>
          <p>{house.coatOfArms}</p>
          <p>{house.ancestralWeapons}</p>
          <p>{house.words}</p>
          <ul>{displayMembers}</ul>
        </div>
      }
      </div>
    )  
  }
}

export default Card
