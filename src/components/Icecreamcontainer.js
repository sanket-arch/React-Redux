import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream,addIcecreame } from "../redux/icecream/icecreamaction";
function Icecreamcontainer() {
  const numberOfIcecreame = useSelector((state) => {
    return state.icecream.numberOfIcecream;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Icecream availabel is-{numberOfIcecreame}</h1>
      <button
        onClick={() => {
          dispatch(buyIcecream());
        }}
      >
        Buy icecream
      </button>
      <button
        onClick={() => {
          dispatch(addIcecreame());
        }}
      >
        Add icecream
      </button>
    </div>
  );
}

export default Icecreamcontainer;
