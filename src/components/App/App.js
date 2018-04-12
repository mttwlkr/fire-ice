import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHousesToStore } from '../../actions';
import { getHouses } from '../../fetches/getHouses.js';
import { getSwornMembers } from '../../fetches/getSwornMembers';
import CardContainer from '../CardContainer/CardContainer.js';
import Wolf from '../../assets/wolf.gif'

export class App extends Component {

  async componentDidMount() {
    const houses = await getHouses()
    this.props.addHousesToStore(houses)
  }

  render() {

    const { houses } = this.props
    
    return (
      <div className='App'>
        
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>    
        </div>
        
        <div className='Display-info'>
          { 
            houses.length > 0  
              ? <CardContainer />
              : <img src={Wolf} alt='loading...'/>
          }
        </div>

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
});

export const mapDispatchToProps = (dispatch) => ({ 
  addHousesToStore: (houses) => dispatch(addHousesToStore(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  addHousesToStore: PropTypes.func,
  houses: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};
