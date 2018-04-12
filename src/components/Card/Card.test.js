import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js'
import { mockCardWithSwornMembers } from '../../mockData/mockData.js'

describe('Card', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card 
      house={mockCardWithSwornMembers}
    />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update the state when clicked', () => {
    wrapper.find('.Card').simulate('click')
    expect(wrapper.state('clicked')).toEqual(true)
  })
})