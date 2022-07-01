import React from "react";

function SearchBar() {
  return (
    <div className="searchBar">
      <form className="search-button">
        <input id="search" type="text" placeholder="SEARCH" className="input" />
        <input type="submit" value="SEARCH" className="buttonBoard" />
      </form>
    </div>
  );
}

export default SearchBar;
