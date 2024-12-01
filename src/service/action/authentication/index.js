import { appActions } from "../../action";

export const loginAction = payload => ({
  type: appActions.LOGIN,
  payload,
});

export const getUserAction = payload => ({
  type: appActions.GET_USER,
  payload,
});

export const signUpAction = payload => ({
  type: appActions.SIGN_UP,
  payload
});