import { getHouses } from './getHouses.js';
import { shallow } from 'enzyme'

describe('getHouses', () => {

  const mockHouses = [ ]

  it('returns an array if status code ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        
      }),
    }))

    const answer = await getHouses()
    console.log(answer)
  })

})