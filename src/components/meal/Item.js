import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MealItem = ({ data: { strMeal, strMealDescription, strMealThumb } }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 200 }} image={strMealThumb} title={strMeal} />
      <CardContent>
        <Typography fontSize={18} gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default MealItem;
