import { buyCake } from "./cakeaction";

//this method is used to access the redux state in components
export const mapStateToProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCake,
  };
};

//it is used to dispatch action
export const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
