import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryItem = ({
  data: { strCategory, strCategoryDescription, strCategoryThumb },
}) => {
  return (
    <Link to={`/meals/${strCategory}`}>
      <Card sx={{ width: "100%", cursor: "pointer" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={strCategoryThumb}
          title={strCategory}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strCategory}
          </Typography>
          <Typography
            title={strCategoryDescription}
            variant="body2"
            color="text.secondary"
          >
            {strCategoryDescription.length > 150
              ? strCategoryDescription.slice(0, 150) + "..."
              : strCategoryDescription}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryItem;
