import { GET_BOOKMARK } from '../actionTypes'; 

let defaultState = {
  items: [],
}

const reducers = (state = defaultState, action) => {
  switch(action.type) {
    case GET_BOOKMARK: 
      return {
        ...state,
        items: action.payload,
      }
    default: return state;
  }
}

export default reducers;
