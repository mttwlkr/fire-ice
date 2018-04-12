import React from 'react';
import { CardContainer, mapStateToProps } from './CardContainer';
import { shallow } from 'enzyme';
import { mockHousesArray } from '../../mockData/mockData.js'

describe('CardContainer', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer 
      houses={mockHousesArray}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should mapStateToProps accordingly', () => {
    const mockState = {houses: ["Ive never watched Game of Thrones"]}
    const mapped = mapStateToProps(mockState)
    expect(mockState.houses).toEqual(mapped.houses)
  })
})