import { EXAMPLE, EXAMPLETWO, GET_BOOKMARK } from '../actionTypes';


export const exampleAction = () => {
  return {
    type: EXAMPLE
  }
}

export const exampleActionTwo = (sampleData) => {
  return {
    type : EXAMPLETWO,
    payload: sampleData
  }
}

export const getbookmarks = () => dispatch => {
  console.log('action call');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(bookmarks => 
      dispatch({
        type: GET_BOOKMARK,
        payload: bookmarks,
      })
    );
}
