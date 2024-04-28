// authReducer.ts

import { AuthState } from "../types";

const initialState: AuthState = {
  isLoggedIn: false,
  userData: null,
  error: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
        error: null,
      };
    case "FETCH_USER_DATA_SUCCESS":
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
