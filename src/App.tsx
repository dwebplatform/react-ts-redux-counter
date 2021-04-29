import * as React from "react";
import { useEffect } from "react";
import { useModifiedSelector, useTypedDispatch } from "./modifiedHooks";
import { useThunkDispatch } from "./thunkActions";
import "./App.css";
export const App = () => {
  const { decrementCount, incrementCount } = useTypedDispatch();
  const { count } = useModifiedSelector((state) => state.counter);
  return (
    <div className="container">
      <input className="container--counter" value={count} />
      <div className="btn-container">
        <button className="btn-danger" onClick={() => incrementCount(1)}>
          +
        </button>
        <button className="btn-light" onClick={() => decrementCount(1)}>
          -
        </button>
      </div>
    </div>
  );
  // const { fetchUsers } = useThunkDispatch();
  // const {
  //   users: { data, isLoading, error }
  // } = useModifiedSelector((state) => state.counter);
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  // if (isLoading) {
  //   return <div>...Loading</div>;
  // }
  // if (error) {
  //   return <div className="error-msg">{error.msg}</div>;
  // }
  // return <div className="user-container">{JSON.stringify(data[0])}</div>;
};
