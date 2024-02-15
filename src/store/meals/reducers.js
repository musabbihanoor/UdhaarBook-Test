import { GET_MEAL_BY_CATEGORY, GET_MEAL_BY_ID, GET_RANDOM_MEAL } from "./types";

const initialState = {
  meals: [],
  randomMeal: null,
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEAL_BY_CATEGORY:
      return {
        ...state,
        meals: action.payload,
      };
    case GET_MEAL_BY_ID:
      return {
        ...state,
        meals: state.meals.find((meal) => meal.id === action.payload),
      };
    case GET_RANDOM_MEAL:
      const randomIndex = Math.floor(Math.random() * state.meals.length);
      return {
        ...state,
        randomMeal: state.meals[randomIndex],
      };
    default:
      return state;
  }
};
