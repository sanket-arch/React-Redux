import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeaction";
function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCake;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cake-{numberOfCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        buycake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
