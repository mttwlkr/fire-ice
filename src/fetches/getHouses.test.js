import { getHouses } from './getHouses.js';
import { shallow } from 'enzyme'
import { mockHousesArray } from '../mockData/mockData.js'

describe('getHouses', () => {

  it('returns an array if status code ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        mockHousesArray
      }),
    }))

    const answer = await getHouses()
    expect(answer.mockHousesArray).toEqual(mockHousesArray)
  })

  it('returns an error if status code not ok', async () => {
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500,
      json: () => Promise.reject(),
    }))

    expect(getHouses()).rejects.toEqual()
  })
})