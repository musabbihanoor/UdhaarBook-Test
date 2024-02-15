import { GET_MEAL_BY_CATEGORY, GET_MEAL_BY_ID, GET_RANDOM_MEAL } from "./types";

export const getMealByCategory = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      dispatch({ type: GET_MEAL_BY_CATEGORY, payload: data.meals });
    } catch (error) {
      console.error("Error fetching meals by category:", error);
    }
  };
};

export const getMealById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      dispatch({ type: GET_MEAL_BY_ID, payload: data.meals });
    } catch (error) {
      console.error("Error fetching meal by ID:", error);
    }
  };
};

export const getRandomMeal = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      dispatch({ type: GET_RANDOM_MEAL, payload: data.meals });
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };
};
