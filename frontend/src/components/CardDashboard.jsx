import React from "react";
import "../styles/CardDashboard.css";
import { HiThumbUp } from "react-icons/hi";

export default function CardDashboard() {
  return (
    <div className="container-card">
      <div className="card-top">
        <div>
          <h1 className="card-title">Project Title</h1>
        </div>
        <div className="card-thumb">
          <HiThumbUp size="22px" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="card-infos">
          <p className="card-client">Client</p>
          <p className="card-client-entry">Trucmuche</p>
          <p className="card-language">Languages</p>
          <p className="card-language-entry">javascript, HTML, CSS</p>
        </div>
      </div>
      <div className="card-contributors">
        <div className="circle-contri">
          <p className="card-initials">GC</p>
        </div>
        <p className="other-contributors">— and 5 more.</p>
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
