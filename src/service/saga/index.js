import { takeEvery, takeLatest } from "redux-saga/effects";
import { sagaEngine } from "./sagaEngine";
import { appActions } from "../action";

function* mySaga() {
  yield takeLatest(appActions.LOGIN, sagaEngine);
  yield takeLatest(appActions.SIGN_UP, sagaEngine);  
}

export default mySaga;
