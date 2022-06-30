import React, { useState, useEffect } from "react";
import "../styles/ProjectsBoard.css";
import { api } from "@services/services";
import CardDashboard from "@components/CardDashboard";
import SearchBar from "@components/SearchBar";

function ProjectsBoard() {
  const [arrayDataOngoing, setarrayDataOngoing] = useState([]);
  const [cardOngoingLength, setCardOngoingLength] = useState(0);
  const [isCardOngoingLimited, setIsCardOngoingLimited] = useState(true);

  const [arrayDataIdea, setarrayDataIdea] = useState([]);
  const [cardIdeaLength, setCardIdeaLength] = useState(0);
  const [isCardIdeaLimited, setIsCardIdeaLimited] = useState(true);

  const [arrayDataFinished, setarrayDataFinished] = useState([]);
  const [cardFinishedLength, setCardFinishedLength] = useState(0);
  const [isCardFinishedLimited, setIsCardFinishedLimited] = useState(true);

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
      <SearchBar />
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
            onClick={() => setIsCardIdeaLimited(!isCardOngoingLimited)}
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
