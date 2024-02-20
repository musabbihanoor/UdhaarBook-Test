import { GET_USER, GET_USERS, SEARCH_USER, USER_ERROR } from "./types";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
        headers: {
          Authorization: `${process.env.REACT_APP_TOKEN}`,
        },
      });
      const data = await response.json();
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error });
    }
  };
};

export const getUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/${username}`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_TOKEN}`,
          },
        },
      );
      const data = await response.json();
      dispatch({ type: GET_USER, payload: data });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error });
    }
  };
};

export const getSearchedUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/users/${username}`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_TOKEN}`,
          },
        },
      );
      const data = await response.json();
      dispatch({ type: SEARCH_USER, payload: [data] });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error });
    }
  };
};
