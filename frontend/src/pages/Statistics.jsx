import React from "react";
import PieChart from "../components/Chart";
import "../styles/Statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="header-title-chart">
        <h2>some statistics</h2>
      </div>
      <div className="chart-container">
        <div>
          <PieChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
