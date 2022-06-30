import React, { useState, useEffect } from "react";
import "../styles/ProjectsBoard.css";
import { api } from "@services/services";
import CardDashboard from "@components/CardDashboard";
import SearchBar from "@components/SearchBar";

function ProjectsBoard() {
  const [arrayData, setarrayData] = useState([]);

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

  return (
    <div className="globalBoard">
      <SearchBar />
      <div className="projects-category">
        <div className="ProjectsBoard">
          <h2>ongoing projects</h2>
        </div>
        <div className="blocCard">
          {arrayData.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}{" "}
        </div>
        <div className="more-cards">
          <p>more</p>
        </div>
      </div>
      <div className="projects-category">
        <div className="ProjectsBoard">
          <h2>projects ideas</h2>
        </div>
        <div className="blocCard">
          {arrayData.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}{" "}
        </div>
        <div className="more-cards">
          <p>more</p>
        </div>
      </div>
      <div className="projects-category">
        <div className="ProjectsBoard">
          <h2>completed projects</h2>
        </div>
        <div className="blocCard">
          {arrayData.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}{" "}
        </div>
        <div className="more-cards">
          <p>more</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectsBoard;
