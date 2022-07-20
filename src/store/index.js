import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
