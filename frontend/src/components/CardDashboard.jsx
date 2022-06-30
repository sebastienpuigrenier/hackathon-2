import React, { useEffect, useState, useContext } from "react";
import { api } from "@services/services";
import "../styles/CardDashboard.css";
import { HiThumbUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ExportContext from "../contexts/Context";

export default function CardDashboard({ info }) {
  const { setCurrentProject } = useContext(ExportContext.Context);

  const projectId = info.id;
  const navigate = useNavigate();

  const likeProject = () => {
    const ENDPOINT = `/projects/like/${info.id}`;
    api.put(ENDPOINT);
  };

  const handleClick = (project) => {
    setCurrentProject(project);
    navigate("/project");
  };

  const [keywordsArray, setKeywordsArray] = useState([]);
  const [languagesArray, setLanguagesArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    const ENDPOINTKEYWORDS = `/keywords/byproject/${projectId}`;
    const ENDPOINTLANGUAGES = `/languages/byproject/${projectId}`;
    const ENDPOINTUSERS = `/users/byproject/${projectId}`;
    const ENDPOINTCREATOR = `/user/creator/${projectId}`;

    function getKeywords() {
      return api.get(ENDPOINTKEYWORDS);
    }

    function getLanguages() {
      return api.get(ENDPOINTLANGUAGES);
    }
    function getContributors() {
      return api.get(ENDPOINTUSERS);
    }
    function getCreator() {
      return api.get(ENDPOINTCREATOR);
    }

    Promise.all([
      getKeywords(),
      getLanguages(),
      getContributors(),
      getCreator(),
    ]).then((results) => {
      setKeywordsArray(results[0].data);
      setLanguagesArray(results[1].data);
      setUsersArray(results[2].data.length);
      setCreator(
        results[3].data[0].firstname.split("").slice(0, 1).join() +
          results[3].data[0].lastname.split("").slice(0, 1).join()
      );
    });
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      className="container-card"
      onClick={() => handleClick(projectId)}
    >
      <div className="card-top">
        <div>
          <h1 className="card-title">{info.name}</h1>
        </div>
        <div className="card-thumb">
          <button type="button" onClick={likeProject}>
            <HiThumbUp size="22px" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="card-description">
          <p>{info.description}</p>
        </div>
        <div className="card-infos">
          <p className="card-client">Client</p>
          <p className="card-client-entry">
            {info.customer} {info.belonging_site}
          </p>
          <p className="card-language">Languages</p>
          <p className="card-language-entry">
            {languagesArray.map((e) => {
              return `${e.language}, `;
            })}
          </p>
        </div>
      </div>
      <div className="card-contributors">
        <div className="circle-contri">
          <p className="card-initials">{creator}</p>
        </div>
        <p className="other-contributors">
          {usersArray > 0 ? `and ${usersArray} more` : ""}
        </p>
      </div>
      <div className="card-bottom">
        <p className="card-keywords">
          {keywordsArray.map((e) => {
            return `#${e.keyword} `;
          })}
        </p>
      </div>
    </div>
  );
}
