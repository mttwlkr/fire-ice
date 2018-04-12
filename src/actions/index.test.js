import * as actions from './index.js';
import { mockHousesAction } from '../mockData/mockData.js'

describe('Actions', () => {

  it('should return an object with a type and payload of houses', () => {
    const expected = {
      type: 'ADD_HOUSES_TO_STORE',
      mockHousesAction
    }

    const answer = actions.addHousesToStore(mockHousesAction)
    expect(answer).toEqual(expected)
  })
})