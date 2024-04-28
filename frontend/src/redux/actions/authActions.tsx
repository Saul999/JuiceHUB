// authActions.ts

import { User } from "../types";

export const loginSuccess = (userData: User) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const fetchUserDataSuccess = (userData: User) => ({
  type: "FETCH_USER_DATA_SUCCESS",
  payload: userData,
});
