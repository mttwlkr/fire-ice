import { getSwornMembers } from './getSwornMembers.js';

export const getHouses = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses')
    const houses = await response.json()
    const swornMembers = await getSwornMembers(houses)
    const housesWithMembers = await houses.map((house, index) => {
      house.swornMembers = swornMembers[index]
      return house
    })
    return housesWithMembers
  } catch (error) {
    throw error
  }
}
