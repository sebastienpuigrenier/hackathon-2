import React from "react";

function SearchBar() {
  return (
    <div className="searchBar">
      <form>
        <input
          id="search"
          type="text"
          placeholder="  Search project"
          className="input"
        />

        {/* <label> */}
        <select>
          <option value="idea">idea</option>
          <option value="in_progress">in progress</option>
          <option value="finished">finished</option>
        </select>
        {/* </label> */}

        <input type="submit" value="SEARCH" className="buttonBoard" />
      </form>
    </div>
  );
}

export default SearchBar;
