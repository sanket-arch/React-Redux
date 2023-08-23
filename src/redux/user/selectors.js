import { fetchUser } from "./userAction";
export const mapStateToProps = (state) => {
  //here the user is the same name that is used inside the root reducer
  return { userData: state.user };
};

export const mapDispatchToProps = (dispatch) => {
  return { fetchuser: () => dispatch(fetchUser()) };
};
