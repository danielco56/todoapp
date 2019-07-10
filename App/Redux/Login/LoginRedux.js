import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  save: ["save"],
  saveToState: ["saveToState"]
});

export const LoginTypes = Types;
export const LoginActions = Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: ""
});

/* ------------- Reducers ------------- */

export const saveToState = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    email: action.saveToState
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_TO_STATE]: saveToState
});
