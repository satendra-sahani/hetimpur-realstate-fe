import { takeLatest } from "redux-saga/effects";
import { sagaEngine } from "./sagaEngine";
import { appActions } from "../action";

function* mySaga() {
  yield takeLatest(appActions.LOGIN, sagaEngine);
  yield takeLatest(appActions.SIGN_UP, sagaEngine);  
  yield takeLatest(appActions.GET_USER,sagaEngine)
  yield takeLatest(appActions.GENERATE_PAYMENT_LINK,sagaEngine)
}

export default mySaga;
