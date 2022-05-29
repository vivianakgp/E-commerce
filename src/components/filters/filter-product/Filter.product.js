import React, { useState } from "react";
import { useDispatch } from "react-redux";
//  actions thunk
import { getProductThunk } from "../../../redux/actions";

const FilterProduct = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const valueInLowerCase = value.substring(1).toLowerCase();
    const newValue = value.charAt(0).toUpperCase() + valueInLowerCase;
    // console.log(newValue)
    dispatch(getProductThunk(newValue)).then(() => setValue(""));
  };
  return (
    <div className="searchContainer">
      <form className="search-box" onSubmit={submit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="reset"></button>
      </form>
    </div>
  );
};

export default FilterProduct;
