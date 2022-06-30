import React from "react";
import PieChart from "../components/Chart";

function Statistics() {
  return (
    <div className="chart-container">
      <div>
        <PieChart />
      </div>
      <div>
        <PieChart />
      </div>
    </div>
  );
}

export default Statistics;
