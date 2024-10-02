import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

// Define 'reducers' first
const reducers = combineReducers({
  amount: amountReducer,
});

// Export the 'reducers' constant
export default reducers;
