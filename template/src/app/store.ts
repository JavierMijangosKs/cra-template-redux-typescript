import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { sessionReducer } from "features/session/sessionSlice";
import { toastReducer } from "features/toast/toastSlice";
import { userManagementReducer } from "features/userManagement/userManagementSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    session: sessionReducer,
    userManagement: userManagementReducer,
    toast: toastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
