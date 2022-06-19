import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./auth";

const rootReducer = combineReducers({
	auth: AuthReducer,
});

export default rootReducer;
