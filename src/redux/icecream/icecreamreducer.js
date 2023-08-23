import { ADD_ICECREAM, BUY_ICECREAM } from "./icecreamtypes";

const intialState = {
  numberOfIcecream: 20,
};

const icecreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };
      case ADD_ICECREAM:
        return {
          ...state,
          numberOfIcecream: state.numberOfIcecream + 1,
        }
    default:
      return state;
  }
};

export default icecreamReducer;
