import { createSelector } from "reselect";

const getLoginState = state => state.login;

export const email = createSelector(
  getLoginState,
  state => state.email
);
