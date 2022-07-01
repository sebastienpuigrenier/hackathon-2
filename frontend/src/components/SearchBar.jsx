import React, { useState } from "react";
import nameProject from "../services/search";
// import { api } from "@services/services";

function SearchBar() {
  const [value , setValue]= useState("")

  const handleclick = (event) => {
    nameProject(value);
    console.log(nameProject(value));
  }
  const handleChange = (event) => {
    setValue(event.target.value)
    
  };

  return (
    <div className="searchBar">
      
      <input
        id="search"
        type="search"
        name="search"
        value={value}
        placeholder="Search projet"
        className="input"
        onChange={handleChange}
      />

      <select>
        <option value="idea">idea</option>
        <option value="in_progress">in progress</option>
        <option value="finished">finished</option>
      </select>

      <button type="button" onClick={handleclick}>SEARCH</button>
      
    </div>
  );
}

export default SearchBar;
