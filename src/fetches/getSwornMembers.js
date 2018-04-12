export const getSwornMembers = async (houses) => {

  const promises = houses.map(async(house) => {
    
    const swornMembers = house.swornMembers.map(async(API) => {
      const response = await fetch(API)
      const swornMember = await response.json()
      return swornMember
    })

    return await Promise.all(swornMembers)
  })

  return Promise.all(promises)
}