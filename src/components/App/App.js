import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHousesToStore } from '../../actions';
import { getHouses } from '../../fetches/getHouses.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Wolf from '../../assets/wolf.gif'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    const houses = await getHouses()
    this.props.addHousesToStore(houses)
    this.setState({loading: false})
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
              ? <CardContainer houses={houses}/>
              : <img src={Wolf} alt='loading...'/>
          }
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


