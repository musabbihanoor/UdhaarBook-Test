import { GET_ALL_CATEGORIES } from "./types";

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/categories.php`
      );
      const data = await response.json();
      dispatch({ type: GET_ALL_CATEGORIES, payload: data.categories });
    } catch (error) {
      console.error("Error while fetching categories");
    }
  };
};
