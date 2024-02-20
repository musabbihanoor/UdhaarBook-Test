import { combineReducers } from "redux";
import { userReducer } from "./user/reducers";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
