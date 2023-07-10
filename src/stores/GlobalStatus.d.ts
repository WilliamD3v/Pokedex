import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log(action)
  return state;
}
export const store = createStore(reducer);
