import React from "react";
import "../styles/CardDashboard.css";
import { HiThumbUp } from "react-icons/hi";

export default function CardDashboard({ info }) {
  return (
    <div className="container-card">
      <div className="card-top">
        <div>
          <h1 className="card-title">{info.name}</h1>
        </div>
        <div className="card-thumb">
          <HiThumbUp size="22px" />
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
          <p className="card-language-entry">javascript, HTML, CSS</p>
        </div>
      </div>
      <div className="card-contributors">
        <div className="circle-contri">
          <p className="card-initials">GC</p>
        </div>
        <p className="other-contributors">
          <span className="underline-off">—</span> and 5 more.
        </p>
      </div>
      <div className="card-bottom">
        <p className="card-keywords">
          #idontknow #idontknow #idontknow #idontknow #idontknow #idontknow
          #idontknow #idontknow
        </p>
      </div>
    </div>
  );
}
