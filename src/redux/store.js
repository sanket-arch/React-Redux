import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cakeReducer from "./cake/cakereducer";
import icecreamReducer from "./icecream/icecreamreducer";
import userReducer from "./user/userReducer";
// import logger from "redux-logger";
const rootreducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
});
const store = legacy_createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
