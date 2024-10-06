import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducer";
import mySaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);