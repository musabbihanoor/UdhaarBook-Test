import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getRandomMeal } from "../store/meals/actions";

import { Button } from "@mui/material";
import MealItem from "../components/meal/Item";

const Random = ({ meal, getRandomMeal }) => {
  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = () => {
    getRandomMeal();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl mb-5">Generate Random Meal</h1>
        <Button onClick={fetchMeal} variant="outlined">
          Generate
        </Button>
      </div>
      {meal ? (
        <div className="mt-5 flex justify-center">
          <div className="w-1/3">
            <MealItem data={meal} />
          </div>
        </div>
      ) : (
        <h1>There's no random meal</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  meal: state.mealsReducer.randomMeal,
});

const mapDispatchToProps = {
  getRandomMeal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
