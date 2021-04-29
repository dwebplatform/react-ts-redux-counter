import { ACTION_VARIANTS } from "./actions/actionVariants";
import { ActionsTypes } from "./actions/actionType";
import { stat } from "fs";
interface IUser {
  data: Array<any>;
  isLoading: boolean;
  error: { msg: string } | null;
}
const initialCountState = {
  count: 0,
  name: "Karl",
  users: <IUser>{
    data: [],
    isLoading: false,
    error: null
  }
};

type StateType = typeof initialCountState;
export const counterReducer = (
  state: StateType = initialCountState,
  action: ActionsTypes
): StateType => {
  switch (action.type) {
    case ACTION_VARIANTS.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + action.value
      };
    case ACTION_VARIANTS.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - action.value
      };
    case ACTION_VARIANTS.FETCH_USER_LOADING:
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: true
        }
      };
    case ACTION_VARIANTS.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: {
          data: <Array<Object>>action.users,
          isLoading: false,
          error: null
        }
      };
    case ACTION_VARIANTS.ADD_USER:
      return { ...state };
    default:
      return state;
  }
};
