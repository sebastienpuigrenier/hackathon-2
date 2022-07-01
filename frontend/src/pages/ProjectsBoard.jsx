import React, { useState, useEffect } from "react";
import "../styles/ProjectsBoard.css";
import { api } from "@services/services";
import CardDashboard from "@components/CardDashboard";

function ProjectsBoard() {
  const [arrayData, setarrayData] = useState([]);
  const [value, setvalue] = useState([]);

  const [arrayDataNew, setarrayDataNew] = useState([]);
  const [arrayDataOngoing, setarrayDataOngoing] = useState([]);
  const [cardOngoingLength, setCardOngoingLength] = useState(0);
  const [isCardOngoingLimited, setIsCardOngoingLimited] = useState(true);

  const [arrayDataIdea, setarrayDataIdea] = useState([]);
  const [cardIdeaLength, setCardIdeaLength] = useState(0);
  const [isCardIdeaLimited, setIsCardIdeaLimited] = useState(true);

  const [arrayDataFinished, setarrayDataFinished] = useState([]);
  const [cardFinishedLength, setCardFinishedLength] = useState(0);
  const [isCardFinishedLimited, setIsCardFinishedLimited] = useState(true);

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
    console.warn(arrayDataNew);
  };
  const moreOngoingButton = () => {
    if (cardOngoingLength > 3) {
      if (isCardOngoingLimited) {
        return "See more";
      }
      return "Hide projects";
    }
    return "";
  };

  useEffect(() => {
    const ENDPOINT = `/projects/ongoing`;
    api.get(ENDPOINT).then((result) => {
      if (isCardOngoingLimited) {
        setCardOngoingLength(result.data.length);
        setarrayDataOngoing(result.data.slice(0, 4));
      } else {
        setarrayDataOngoing(result.data);
      }
    });
  }, [isCardOngoingLimited]);

  const moreIdeaButton = () => {
    if (cardIdeaLength > 3) {
      if (isCardIdeaLimited) {
        return "See more";
      }
      return "Hide projects";
    }
    return "";
  };

  useEffect(() => {
    const ENDPOINT = `/projects/idea`;
    api.get(ENDPOINT).then((result) => {
      if (isCardIdeaLimited) {
        setCardIdeaLength(result.data.length);
        setarrayDataIdea(result.data.slice(0, 4));
      } else {
        setarrayDataIdea(result.data);
      }
    });
  }, [isCardIdeaLimited]);

  const moreFinishedButton = () => {
    if (cardFinishedLength > 3) {
      if (isCardFinishedLimited) {
        return "See more";
      }
      return "Hide projects";
    }
    return "";
  };

  useEffect(() => {
    const ENDPOINT = `/projects/finished`;
    api.get(ENDPOINT).then((result) => {
      if (isCardFinishedLimited) {
        setCardFinishedLength(result.data.length);
        setarrayDataFinished(result.data.slice(0, 4));
      } else {
        setarrayDataFinished(result.data);
      }
    });
  }, [isCardFinishedLimited]);

  return (
    <div className="globalBoard">
      <div className="searchBar">
        <form onSubmit={handleclick} className="search-button">
          <input
            id="search"
            type="text"
            name="name"
            placeholder="Search projet"
            className="input"
            onChange={handleChange}
          />

          <button className="buttonBoard" type="submit" onSubmit={handleclick}>
            SEARCH
          </button>
        </form>
      </div>
      <div className="projects-category">
        <div className="ProjectsBoard">
          <h2>ongoing projects</h2>
        </div>
        <div className="blocCard">
          {arrayDataOngoing.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}
        </div>
        <div className="more-cards">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsCardOngoingLimited(!isCardOngoingLimited)}
          >
            {moreOngoingButton()}
          </div>
        </div>
      </div>
      <div className="projects-category">
        <div className="ProjectsBoard">
          <h2>projects Ideas</h2>
        </div>
        <div className="blocCard">
          {arrayDataIdea.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}{" "}
        </div>
        <div className="more-cards">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsCardIdeaLimited(!isCardIdeaLimited)}
          >
            {moreIdeaButton()}
          </div>
        </div>
      </div>
      <div className="projects-category">
        <div className="ProjectsBoard">
          <h2>completed projects</h2>
        </div>
        <div className="blocCard">
          {arrayDataFinished.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}{" "}
        </div>
        <div className="more-cards">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsCardFinishedLimited(!isCardOngoingLimited)}
          >
            {moreFinishedButton()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsBoard;
