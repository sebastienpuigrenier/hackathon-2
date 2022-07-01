import React, { useContext, useState, useEffect } from "react";
import { api } from "@services/services";
import { BsPersonCircle } from "react-icons/bs";
import CardDashboard from "../components/CardDashboard";
import ExportContext from "../contexts/Context";

import "../styles/UserProfil.css";

function Profil() {
  const { userContext } = useContext(ExportContext.Context);
  const { email } = userContext;
  const [userId, setUserId] = useState();
  const [arrayProjectCreator, setarrayProjectCreator] = useState([]);
  const [arrayProjectCollaborator, setarrayProjectCollaborator] = useState([]);

  const ENDPOINTUSER = `/users/email/${email}`;
  useEffect(() => {
    api.get(ENDPOINTUSER).then((response) => {
      setUserId(response.data.id);
    });
  }, []);

  const ENDPOINTPROJECTCREATOR = "/projects";
  useEffect(() => {
    api.get(ENDPOINTPROJECTCREATOR).then((result) => {
      setarrayProjectCreator(
        result.data.filter((project) => project.user_id === userId)
      );
    });
  }, [userId]);

  const ENDPOINTPROJECTCOLLAB = `/projects/collaborator/${userId}`;
  useEffect(() => {
    api.get(ENDPOINTPROJECTCOLLAB).then((result) => {
      setarrayProjectCollaborator(result.data);
    });
  }, [userId]);

  return (
    <div className="container-profil">
      <div className="header-profil">
        <div className="title-profil">
          <h2>My profile</h2>
        </div>
      </div>
      <div className="info-user">
        <BsPersonCircle size="6em" className="logo-avatar" />
      </div>
      <div className="profile-projects">
        <h3>My projects</h3>
        {arrayProjectCreator.map((card) => (
          <CardDashboard info={card} key={card.id} />
        ))}
        <h3>My collaborations</h3>
        <div className="collaborator">
          {arrayProjectCollaborator.map((card) => (
            <CardDashboard info={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profil;
