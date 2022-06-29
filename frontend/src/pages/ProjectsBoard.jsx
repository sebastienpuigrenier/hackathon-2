import React, { useState, useEffect } from "react";
import "../styles/ProjectsBoard.css";
import axios from "axios";
import CardDashboard from "@components/CardDashboard";

function ProjectsBoard() {
  const [arrayData, setarrayData] = useState([]);

  useEffect(() => {
    const API = `http://localhost:5000/projects`;

    axios
      .get(API)
      .then((res) => res.data)
      .then((cards) => {
        setarrayData(cards);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="globalBoard">
      <div className="searchBar">
        <input
          id="search"
          type="select"
          name="search"
          placeholder="  Search project"
          className="input"
        />

        <input id="select" type="select" name="select" placeholder="  type" />
        <button className="buttonBoard" type="button">
          SEARCH
        </button>
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
