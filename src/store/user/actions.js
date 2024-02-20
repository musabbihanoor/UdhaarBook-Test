import { GET_USERS } from "./types";

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
      console.error("Error while fetching users");
    }
  };
};
