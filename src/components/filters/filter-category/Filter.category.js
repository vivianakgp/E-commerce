import React, { useEffect, useState } from "react";
import axios from "axios";
// redux
import { useDispatch } from "react-redux";
// actions thunk
import { getProductsByCategoryThunk } from "../../../redux/actions";
import "./filterCategory.css";

const FilterCategory = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);
  console.log(categories);
  const filterProducts = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    dispatch(getProductsByCategoryThunk(e.target.value));
  };
  return (
    <div className="selectBox">
      <button>
        Category
        <ul>
          {categories.map((category) => (
            <li key={category.id} value={category.id} onClick={filterProducts}>
              {category.name}
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
};
export default FilterCategory;
