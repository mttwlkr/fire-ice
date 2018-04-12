import houseReducer from './house-reducer.js';
import { mockHousesArray } from '../mockData/mockData.js'

describe('houseReducer', () => {

  it('should return an empty array if state is undefined', () => {
    const answer = houseReducer(undefined, '')
    expect(answer).toEqual([])
  })

  it('should return an array of houses if action type matches', () => {
    const mockAction = {
      type: 'ADD_HOUSES_TO_STORE',
      houses: mockHousesArray
    }

    const answer = houseReducer([], mockAction)
    expect(answer).toEqual(mockHousesArray)
  })
})