import { put, call } from "redux-saga/effects";
import { appActions } from "../../action";
import { appApi } from "../../api";

export function* sagaEngine({ type, payload }) {
  try {
    yield put({ type: `${appActions[type]}_START`, request: payload });
    const response = yield call(appApi[type], payload);
    payload?.cb && payload.cb(response?.data);
    yield put({
      type: `${appActions[type]}_SUCCESS`,
      payload: response.data,
      request: payload,
    });
  } catch (error) {
    payload?.errorCB && payload.errorCB(error);
    alert(error?.response?.data?.message || error?.message);
    if (error?.response?.status === 401) {
      yield put({ type: `${appActions[type]}_FAIL` ,request: payload});
      payload.push && payload.push("/login");
    }
   

    yield put({ type: `${appActions[type]}_FAIL` });
  }
}
