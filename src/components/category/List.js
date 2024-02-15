import React from "react";
import CategoryItem from "./Item";

const CategoryList = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data.map((x) => (
        <CategoryItem key={x.idCategory} data={x} />
      ))}
    </div>
  );
};

export default CategoryList;
