import React from "react";
import MealList from "../components/meal/List";

import { connect } from "react-redux";

const Favourites = ({ favorites }) => {
  return (
    <div>
      <h1 className="text-3xl mb-5">Favourite Meals</h1>
      {favorites.length > 0 ? (
        <MealList data={favorites} />
      ) : (
        <h1>Favorite list is empty!</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.mealsReducer.favorites,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
