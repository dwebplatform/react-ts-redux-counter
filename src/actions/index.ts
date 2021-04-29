// import { useDispatch } from "react-redux";
// import { bindActionCreators, Dispatch } from "redux";
import { ACTION_VARIANTS } from "./actionVariants";

export const decrementCount = (value: number) => {
  return {
    type: ACTION_VARIANTS.DECREMENT_COUNT,
    value
  } as const;
};

export const incrementCount = (value: number) => {
  return {
    type: ACTION_VARIANTS.INCREMENT_COUNT,
    value
  } as const;
};
export const fetchUserSuccess = (users: Array<any>) => {
  return {
    type: ACTION_VARIANTS.FETCH_USER_SUCCESS,
    users
  } as const;
};
export const fetchUserLoading = () => {
  return {
    type: ACTION_VARIANTS.FETCH_USER_LOADING
  } as const;
};

export const fetchUserError = (error: { msg: string }) => {
  return {
    type: ACTION_VARIANTS.FETCH_USER_ERROR,
    msg: error.msg
  } as const;
};

export const addUser = (x: number) => {
  return {
    value: x,
    type: ACTION_VARIANTS.ADD_USER
  } as const;
};

export const fetchData = () => {
  return {
    type: ACTION_VARIANTS.FETCH_USER,
    value: 1
  } as const;
};
