import { combineReducers } from "redux";
import { mealsReducer } from "./meals/reducers";
import { categoryReducer } from "./categories/reducers";

const rootReducer = combineReducers({
  mealsReducer,
  categoryReducer,
});

export default rootReducer;
