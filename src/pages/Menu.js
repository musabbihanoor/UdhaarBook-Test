import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllCategories } from "../store/categories/actions";
import { getMealByCategory } from "../store/meals/actions";

import CategoryList from "../components/category/List";
import Loading from "../components/Loading";

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
      {categories ? <CategoryList data={categories} /> : <Loading />}
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
