import React from "react";

import "../styles/UserProfil.css";

function Profil() {
  return (
    <div className="container-profil">
      <div className="header-profil">
        <div className="title-profil">
          <h2>My profil</h2>
        </div>
        <div className="info-user">
          <p>utilisateur</p>
          <div>
            <h3>My projects</h3>
            <h3>My collaborations</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profil;
