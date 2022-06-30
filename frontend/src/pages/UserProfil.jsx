import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
// import CardDashboard from "../components/CardDashboard";
import ExportContext from "../contexts/Context";

import "../styles/UserProfil.css";

function Profil() {
  const { userContext } = useContext(ExportContext.Context);

  return (
    <div className="container-profil">
      <div className="header-profil">
        <div className="title-profil">
          <h2>My profil</h2>
        </div>
      </div>
      <div className="info-user">
        <BsPersonCircle size="6em" className="logo-avatar" />
        <p>{`${userContext.firstname} ${userContext.lastname}`}</p>
      </div>
      <div className="profile-projects">
        <h3>My projects</h3>
        {/* <CardDashboard info={card} />
        <CardDashboard info={card} /> */}
        <h3>My collaborations</h3>
      </div>
    </div>
  );
}
export default Profil;
