import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ACTION_VARIANTS } from "../actionVariants";
import { ActionsTypes } from "../actionType";

export const thunkActions = {
  fetchUsers: () => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      dispatch({ type: ACTION_VARIANTS.FETCH_USER_LOADING });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      dispatch({ type: ACTION_VARIANTS.FETCH_USER_SUCCESS, users: data });
    } catch (e) {
      dispatch({
        type: ACTION_VARIANTS.FETCH_USER_ERROR,
        msg: "Не удалось загрузить пользователя"
      });
    }
  }
};

export type ThunkActionsType = typeof thunkActions;

export function useThunkDispatch() {
  const dispatch = useDispatch();
  return bindActionCreators(thunkActions, dispatch);
}
