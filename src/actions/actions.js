import { EXAMPLE, EXAMPLETWO } from '../actionTypes';


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

