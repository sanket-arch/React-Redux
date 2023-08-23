import { BUY_CAKE } from "./caketypes";
const initalState = {
  numberOfCake: 10,
};

const cakereducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };
    default:
      return state;
  }
};

export default cakereducer;
