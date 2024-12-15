import { takeLatest } from "redux-saga/effects";
import { sagaEngine } from "./sagaEngine";
import { appActions } from "../action";

function* mySaga() {
  yield takeLatest(appActions.LOGIN, sagaEngine);
  yield takeLatest(appActions.SIGN_UP, sagaEngine);  
  yield takeLatest(appActions.GET_USER,sagaEngine)
  yield takeLatest(appActions.GENERATE_PAYMENT_LINK,sagaEngine)
  yield takeLatest(appActions.VERIFY_PAYMENT_STATUS,sagaEngine)
  yield takeLatest(appActions.SAVE_LAND,sagaEngine)
  yield takeLatest(appActions.GET_LAND,sagaEngine)
  yield takeLatest(appActions.UPDATE_LAND,sagaEngine)
  yield takeLatest(appActions.DELETE_LAND,sagaEngine)
  yield takeLatest(appActions.UPLOAD_SINGLE_IMAGE,sagaEngine)
}

export default mySaga;
