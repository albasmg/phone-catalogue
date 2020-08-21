import * as actionTypes from './action-types';

export const setPhones = (phones) => {
  return {
    type: actionTypes.SET_PHONES,
    payload: { phones },
  };
};
