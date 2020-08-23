import * as actionTypes from './action-types';
import { PHONES } from './constants';

const initialState = {
  [PHONES]: [],
};

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PHONES:
      return {
        ...state,
        [PHONES]: action.payload.phones,
      };
    default:
      return state;
  }
};
