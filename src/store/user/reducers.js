import { GET_USER, GET_USERS, SEARCH_USER, USER_ERROR } from "./types";

const initialState = {
  users: [],
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SEARCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        user: null,
        users: [],
      };
    default:
      return state;
  }
};
