import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import { LoginActions } from "../Redux/Login";

export function* save(action) {
  try {
    const { email } = action.save;
    
    yield put(LoginActions.saveToState(email));
  } catch (error) {
    console.log(error);
  }
}


