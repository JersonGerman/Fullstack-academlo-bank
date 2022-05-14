import axios from "axios";

import { usersActions } from "../slices/user.slice";

const API_URL = "http://localhost:4200/api/v1/users";

export const login = (accountNumber, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const dataFront = {
        accountNumber,
        password,
      };
      const { data } = await axios.post(API_URL + "/login", dataFront);
      dispatch(usersActions.login(data.user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      console.log(name, password);
      const { data } = await axios.post(API_URL + "/signup", {
        name,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(usersActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
};
