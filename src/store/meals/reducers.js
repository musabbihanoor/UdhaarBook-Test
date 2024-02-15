import {
  ADD_MEAL_TO_FAVORITES,
  GET_MEAL_BY_CATEGORY,
  GET_MEAL_BY_ID,
  GET_RANDOM_MEAL,
  REMOVE_MEAL_FROM_FAVORITES,
} from "./types";

const initialState = {
  meals: [],
  favorites: [],
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
        meal: action.payload[0],
      };
    case GET_RANDOM_MEAL:
      return {
        ...state,
        randomMeal: action.payload[0] ? action.payload[0] : null,
      };
    case ADD_MEAL_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_MEAL_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (meal) => meal.idMeal !== action.payload
        ),
      };
    default:
      return state;
  }
};
