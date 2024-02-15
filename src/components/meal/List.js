import React from "react";
import MealItem from "./Item";

const MealList = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((x) => (
        <MealItem key={x.idMeal} data={x} />
      ))}
    </div>
  );
};

export default MealList;
