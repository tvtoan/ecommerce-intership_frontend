import * as types from './types';

// actions
export const aHandleMessage = (error) => ({
  type: types.ERROR_MESSAGE,
  error,
});