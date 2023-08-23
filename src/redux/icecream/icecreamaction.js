import { BUY_ICECREAM, ADD_ICECREAM } from "./icecreamtypes";

export const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

export const addIcecreame = () => {
  return {
    type: ADD_ICECREAM,
  };
};
