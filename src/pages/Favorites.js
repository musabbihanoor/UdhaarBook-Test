import React from "react";
import MealList from "../components/meal/List";
import Loading from "../components/Loading";

import { connect } from "react-redux";

const Favourites = ({ favorites }) => {
  return (
    <div>
      <h1 className="text-3xl mb-5">Meals</h1>
      {favorites ? <MealList data={favorites} /> : <Loading />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.mealsReducer.favorites,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
