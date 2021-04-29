import { useSelector, TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { RootReducerType } from "./rootReducer";
import * as actions from "./actions";
import { thunkActions } from "./actions/thunkActions";

// useSelector
export const useModifiedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export const useTypedDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ ...actions, ...thunkActions }, dispatch);
};
