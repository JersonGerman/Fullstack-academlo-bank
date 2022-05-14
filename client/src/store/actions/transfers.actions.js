import axios from "axios";

import { transfersActions } from "../slices/transfers.slice";

const API_URL = "http://localhost:4200/api/v1";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const { data } = await axios.get(`${API_URL}/users/${userId}/history`);
      dispatch(
        transfersActions.getTransfers({ transfers: data.userTransfers })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (
  accountNumberSender,
  accountNumberReceiver,
  amount
) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const postBody = {
        accountNumberSender,
        accountNumberReceiver,
        amount,
      };
      const { data } = await axios.post(API_URL + "/transfers", postBody);
      console.log(data);
      dispatch(transfersActions.newTransfer(data));
    } catch (error) {
      console.log(error);
    }
  };
};
