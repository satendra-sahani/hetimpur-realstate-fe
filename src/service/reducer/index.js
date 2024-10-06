import { combineReducers } from "redux";
import { adminReducer } from "./admin";
import { authenticationReducer } from "./authentication";
import { commonReducer } from "./common";
const appReducer = combineReducers({
  adminReducer,
  authenticationReducer,
  commonReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
