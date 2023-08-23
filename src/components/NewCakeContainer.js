import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeaction";
function NewCakeContainer() {
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCake;
  });
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>Number of Cake-{numberOfCakes}</h1>
      <input
        type="text"
        placeholder={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(buyCake(number));
        }}
      >
        buycake {number}
      </button>
    </div>
  );
}

export default NewCakeContainer;
