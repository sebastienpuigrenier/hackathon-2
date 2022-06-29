import React from "react";
// import "../styles/CardDashboard.css";
import Up from "../assets/up.png";

export default function CardDashboard() {
  return (
    <div className="container-card">
      <div className="card-top">
        <div>
          <h1 className="card-title">Project Title</h1>
        </div>
        <div className="card-thumb">
          <img src={Up} alt="like/up" className="logo-thumb" />
        </div>
      </div>
      <div className="card-underline" />
      <div className="card-body">
        <div className="card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="cxc" />
      </div>
    </div>
  );
}
