import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { getMealByCategory } from "../store/meals/actions";

import Loading from "../components/Loading";
import MealList from "../components/meal/List";

const Meals = ({ meals, getMealByCategory }) => {
  const { category } = useParams();

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    getMealByCategory(category);
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">Meals</h1>
      {meals ? <MealList data={meals} /> : <Loading />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  meals: state.mealsReducer.meals,
});

const mapDispatchToProps = {
  getMealByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
