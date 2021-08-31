import { combineReducers } from "@reduxjs/toolkit";
// reducers
import bidReducer from "./bidReducer";

const rootReducer = combineReducers({
  bidReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>