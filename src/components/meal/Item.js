import React from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CardActions } from "@mui/material";
import {
  addMealToFavorites,
  removeMealFromFavorites,
} from "../../store/meals/actions";

const MealItem = ({
  data: { idMeal, strMeal, strMealThumb },
  favorites,
  addMealToFavorites,
  removeMealFromFavorites,
}) => {
  const isFavorite =
    favorites && favorites.some((meal) => meal.idMeal === idMeal);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeMealFromFavorites(idMeal);
    } else {
      addMealToFavorites({
        idMeal: idMeal,
        strMeal: strMeal,
        strMealThumb: strMealThumb,
      });
    }
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 200 }} image={strMealThumb} title={strMeal} />
      <CardContent>
        <Typography fontSize={18} gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end gap-2">
        <Link>
          {isFavorite ? (
            <FaHeart
              className="text-xl text-red m-2"
              onClick={handleFavoriteToggle}
            />
          ) : (
            <FaRegHeart
              className="text-xl text-red m-2"
              onClick={handleFavoriteToggle}
            />
          )}
        </Link>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.mealsReducer.favorites,
});

const mapDispatchToProps = {
  addMealToFavorites,
  removeMealFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealItem);
