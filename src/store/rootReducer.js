import { combineReducers } from "redux";
import { categoryReducer } from "./categories/reducers";

const rootReducer = combineReducers({
  categoryReducer,
});

export default rootReducer;
