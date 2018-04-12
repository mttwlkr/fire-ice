const houseReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_HOUSES_TO_STORE':
      return [...action.houses]
    // case 'ADD_SWORN_MEMBERS_TO_STORE':
  default:
    return state;
  }
};

export default houseReducer
