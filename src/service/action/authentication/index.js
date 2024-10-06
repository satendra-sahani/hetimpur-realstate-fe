import { appActions } from "../../action";

export const loginAction = payload => ({
  type: appActions.LOGIN,
  payload,
});

export const signUpAction = payload => ({
  type: appActions.SIGN_UP,
  payload
});