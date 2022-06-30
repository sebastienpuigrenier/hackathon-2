import React from "react";

import "../styles/UserProfil.css";

function Profil() {
  return (
    <div className="container-profil">
      <div className="header-profil">
        <div className="ProjectsBoard">
          <h2>My profil</h2>
        </div>
      </div>
      <div>
        <p>utilisateur</p>
        <div>
          <h3>My projects</h3>
          <h3>My collaborations</h3>
        </div>
      </div>
    </div>
  );
}
export default Profil;
