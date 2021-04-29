import { useSelector, useDispatch } from "react-redux";
import {
  combineReducers,
  bindActionCreators,
  createStore,
  applyMiddleware
} from "redux";
import { counterReducer } from "./reducers";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  counter: counterReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
