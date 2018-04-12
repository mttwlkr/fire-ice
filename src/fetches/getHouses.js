// import { getSwornMembers } from './getSwornMembers.js';

export const getHouses = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses')
    const houses = await response.json()
    return houses
  } catch (error) {
    throw error
  }
}

// export const getHouses = async () => {
//   try {
//     const response = await fetch('http://localhost:3001/api/v1/houses')
//     const houses = await response.json()
//     const swornMembers = await getSwornMembers(houses)
    
//   } catch (error) {
//     throw error
//   }
// }

