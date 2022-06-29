import React from "react";
import "../styles/CardDashboard.css";
import Up from "../assets/up.png";

export default function CardDashboard() {
  return (
    <div classname="container-card">
      <div classname="card-top">
        <div>
          <h1 className="card-title">Project Title</h1>
        </div>
        <div classname="card-thumb">
          <img src={Up} alt="like/up" className="logo-thumb" />
        </div>
      </div>
      <div classname="card-underline" />
      <div classname="card-body">
        <div classname="card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div classname="cxc" ></div>
     
    </div>
  );
}
