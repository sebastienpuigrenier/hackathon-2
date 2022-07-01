import React, { useEffect, useState, useContext } from "react";
import { api } from "@services/services";
import MessageBoard from "@components/MessageBoard";
import { HiThumbUp } from "react-icons/hi";
import ExportContext from "../contexts/Context";
import "../styles/Project.css";

function Project() {
  const { currentProject } = useContext(ExportContext.Context);
  const projectId = currentProject;

  const [detailProject, setDetailProject] = useState([]);

  const [keywordsArray, setKeywordsArray] = useState([]);
  const [languagesArray, setLanguagesArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    const ENDPOINTKEYWORDS = `/keywords/byproject/${projectId}`;
    const ENDPOINTLANGUAGES = `/languages/byproject/${projectId}`;
    const ENDPOINTUSERS = `/users/byproject/${projectId}`;
    const ENDPOINTPROJECTS = `/projects/${projectId}`;

    function getKeywords() {
      return api.get(ENDPOINTKEYWORDS);
    }

    function getLanguages() {
      return api.get(ENDPOINTLANGUAGES);
    }
    function getContributors() {
      return api.get(ENDPOINTUSERS);
    }
    function getProject() {
      return api.get(ENDPOINTPROJECTS);
    }

    Promise.all([
      getKeywords(),
      getLanguages(),
      getContributors(),
      getProject(),
    ]).then((results) => {
      setKeywordsArray(results[0].data);
      setLanguagesArray(results[1].data);
      setUsersArray(results[2].data);
      setDetailProject(results[3].data);
    });
  }, []);

  return (
    <div className="container-project-details">
      <div className="header-project">
        <div className="center-header">
          <div className="header-project">
            <h1>DETAILED PROJECT</h1>
          </div>
        </div>
        <div className="title-project">
          <h1>{detailProject.name}</h1>
          <p className="thumbUp">
            <HiThumbUp size="32px" /> 22
          </p>
        </div>
        <div className="slider-container">
          <div className="slider-label">
            <div className="slider-text-right">Idea</div>
            <div className="slider-text-center">In progress</div>
            <div className="slider-text-left">Finished</div>
          </div>
          <input
            className="slider"
            type="range"
            list="tickmarks"
            min="0"
            max="2"
            step="1"
          />
          <datalist id="tickmarks">
            <option value="0" label="Idea" />
            <option value="1" label="In progress" />
            <option value="2" label="Finished" />
          </datalist>
        </div>
        <div className="section-project">
          <h2>Customer</h2>
          <p>{detailProject.customer}</p>
        </div>
        <div className="section-project">
          <h2>Language</h2>
          {languagesArray.map((e) => {
            return <p> {e.language} </p>;
          })}
        </div>
        <div className="section-project">
          <h2>Description</h2>
          <p>{detailProject.description}</p>
        </div>
        <div className="section-project">
          <h2>Goals</h2>
          <p>{detailProject.goals}</p>
        </div>
        <div className="section-project">
          <div className="contributors">
            <h2>Contributors</h2>
            <a href="/github">Contribute to this project</a>
          </div>
          {usersArray.map((e) => {
            return (
              <p>
                {e.firstname} {e.lastname}
              </p>
            );
          })}
        </div>
        <div className="section-project">
          <h2>Keywords</h2>
          {keywordsArray.map((e) => {
            return <p> #{e.keyword} </p>;
          })}
        </div>
        <div className="zone-commentaire">
          <h1>Commentaires</h1>
          <MessageBoard projectId={projectId} />
        </div>
      </div>
    </div>
  );
}
export default Project;
