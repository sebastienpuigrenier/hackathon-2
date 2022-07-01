import React, { useState, useEffect } from "react";
import "../styles/ProjectsBoard.css";
import { api } from "@services/services";
import CardDashboard from "@components/CardDashboard";

function ProjectsBoard() {
  const [arrayData, setarrayData] = useState([]);
  const [value, setvalue] = useState([]);
  const [arrayDataNew, setarrayDataNew] = useState([]);

  useEffect(() => {
    const API = `/projects`;
    api
      .get(API)
      .then((res) => res.data)
      .then((cards) => {
        setarrayData(cards);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    setarrayDataNew(
      arrayData.filter(
        (data) =>
          data.belonging_site.toLowerCase().includes(search) ||
          data.description.toLowerCase().includes(search) ||
          data.goals.toLowerCase().includes(search)
      )
    );
    if (search === "") {
      setarrayDataNew(arrayData);
    }
  };
  const handleclick = (event) => {
    event.preventDefault();
    setvalue(value);

    // console.log(setvalue(cards.filter(card=>card.belonging_site === value)));
    // console.log("coucou: "+value);
  };

  return (
    <div className="globalBoard">
      <div className="searchBar">
        <form onSubmit={handleclick}>
          <input
            id="search"
            type="text"
            name="name"
            placeholder="Search projet"
            className="input"
            onChange={handleChange}
          />

          <button type="submit" onSubmit={handleclick}>
            SEARCH
          </button>
        </form>
      </div>
      <div className="ProjectsBoard">
        <h2>test</h2>
      </div>
      <div className="blocCard">
        {arrayDataNew.map((card) => (
          <CardDashboard info={card} key={card.id} />
        ))}{" "}
      </div>
      <div className="ProjectsBoard">
        <h2>PROJECTS IN PROGRESS</h2>
      </div>
      <div className="blocCard">
        {arrayData.map((card) => (
          <CardDashboard info={card} key={card.id} />
        ))}{" "}
      </div>

      <div className="ProjectsBoard">
        <h2>PROJECTS IN IDEAS</h2>
      </div>
      <div className="blocCard">
        {arrayData.map((card) => (
          <CardDashboard info={card} key={card.id} />
        ))}{" "}
      </div>
    </div>
  );
}
export default ProjectsBoard;
