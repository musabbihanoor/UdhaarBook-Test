import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllCategories } from "../store/categories/actions";
import { getMealByCategory } from "../store/meals/actions";

import CategoryList from "../components/category/List";

const Menu = ({ categories, getAllCategories, getMealByCategory }) => {
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    getAllCategories();
  };

  return (
    <div>
      <h1 className="text-3xl mb-5">Categories</h1>
      {categories.length > 0 ? (
        <CategoryList data={categories} />
      ) : (
        <h1>Category list is empty!</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = {
  getAllCategories,
  getMealByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
