import * as types from './types';

// initial state for reducer
const initialState = { /* ... */ };

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_TYPE_ONE: 
      return {
        ...state,
        /* modify state in immutable fashion */
      };
    /* other ACTION_TYPEs... */
    default: 
      return state;
  }
};