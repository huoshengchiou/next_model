import React from "react";
import { useAppContext } from "../../helpers/context";
import { useSelector, useDispatch } from "react-redux";

const testContext = (props) => {
  const { setNum } = useAppContext();
  const test = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  console.log({ test });
  return (
    <>
      testContext
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        dispatch by +
      </button>
      <button onClick={() => setNum((pre) => pre + 1)}>click</button>
    </>
  );
};

export default testContext;
