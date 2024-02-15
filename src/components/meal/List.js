import React from "react";
import MealItem from "./Item";

const MealList = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data.map((x) => (
        <MealItem key={x.idMeal} data={x} />
      ))}
    </div>
  );
};

export default MealList;
