import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import React from 'react';
import { shallow } from 'enzyme';
import { getHouses } from '../../fetches/getHouses';
import { mockHousesArray, mockHousesAction } from '../../mockData/mockData.js'

jest.mock('../../fetches/getHouses') 

describe('App', () => {

  let wrapper;
  let mockHousesToStore = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<App 
      addHousesToStore={mockHousesToStore}
      houses={mockHousesArray}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount should invoke getHouses, addHousesToStore', () => {
    expect(mockHousesToStore).toHaveBeenCalled()
    expect(getHouses).toHaveBeenCalled()
  })

  it('should mapStateToProps correctly', () => {
    const mockState = {houses: ["Ive never seen Game of Thrones"]}
    const mapped = mapStateToProps(mockState)
    expect(mapped.houses).toEqual(mockState.houses)
  })

  it('should mapDispatchToProps correctly', () => {
    const mockDispatch = jest.fn()
    const mapped = mapDispatchToProps(mockDispatch)
    mapped.addHousesToStore()
    expect(mockDispatch).toHaveBeenCalled()
  })
})