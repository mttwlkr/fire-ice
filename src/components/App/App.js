import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHousesToStore } from '../../actions';
import { getHouses } from '../../fetches/getHouses.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {

  async componentDidMount() {
    const houses = await getHouses()
    this.props.addHousesToStore(houses)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>    
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = (state) => ({
  houses: state.houses
});

const mapDispatchToProps = (dispatch) => ({ 
  addHousesToStore: (houses) => dispatch(addHousesToStore(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


