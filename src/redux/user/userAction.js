import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchusersrequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchusersuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const fetchuserfailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//asynchorous behaviour can be possible due to redux-thunk, it allow a action function to return a function
export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchusersrequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => {
          return user;
        });
        dispatch(fetchusersuccess(users));
      })
      .catch((error) => {
        dispatch(fetchuserfailure(error));
      });
  };
};
