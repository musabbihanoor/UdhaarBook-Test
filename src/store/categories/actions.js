import { GET_ALL_CATEGORIES } from "./types";

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data = await response.json();
      dispatch({ type: GET_ALL_CATEGORIES, payload: data.categories });
    } catch (error) {
      console.error("Error while fetching categories");
    }
  };
};
