import * as types from './types';

// action (Actions are payloads of information that send data from your application to your store)
export const action = (/* params... */) => ({
  type: types.ACTION_TYPE_ONE,
  /* params... */
});


// action creators (functions that create actions)
export const actionCreator = (/* params... */) => dispatch => {
  /* return action by use dispatch*/
};