import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  auth: authReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
