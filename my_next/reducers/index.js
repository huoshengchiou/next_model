import { combineReducers } from "redux";
import { counterReducer } from "./test";

//counter is key to state
const allReducer = combineReducers({ counterReducer });

export default allReducer;
