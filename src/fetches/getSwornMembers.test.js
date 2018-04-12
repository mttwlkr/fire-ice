import { shallow } from 'enzyme'
import { mockHousesArray } from '../mockData/mockData.js';
import { getSwornMembers } from './getSwornMembers.js';

describe('getSwornMembers', () => {

  it.skip('returns an array if status code ok', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        houses
      }),
    }))
    const answer = await getSwornMembers()

  })

  it.skip('returns an error if status code not ok', async () => {
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500,
      json: () => Promise.reject(),
    }))

  })
})