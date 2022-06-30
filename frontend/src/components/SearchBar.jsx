import React from "react";

function SearchBar() {
  const handlesubmit = (event) => {
    event.preventDefault();
    return console.warn("coucou");
    // setSearchValue(event.target.value);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handlesubmit}>
        <input
          id="search"
          type="text"
          placeholder="  Search project"
          className="input"
        />

        <input id="select" type="text" placeholder="  type" />

        <input type="submit" value="SEARCH" className="buttonBoard" />
      </form>
    </div>
  );
}

export default SearchBar;
