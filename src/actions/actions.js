import { EXAMPLE, EXAMPLE_TWO } from '../actionTypes';

export const exampleAction = () => ({ type: EXAMPLE });

export const exampleActionTwo = sampleData => ({
  type: EXAMPLE_TWO,
  payload: sampleData
});
