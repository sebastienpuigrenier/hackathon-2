import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function Chart(input) {
  const { arrayData } = input;

  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  return (
    <div>
      <PieChart
        data={arrayData}
        style={{ height: "250px", width: "100%", color: " #FF00FF" }}
        label={({ dataEntry }) =>
          `${Math.round(dataEntry.percentage)}% ${dataEntry.title}`
        }
        // label={({ dataEntry }) => dataEntry.value}
        labelStyle={defaultLabelStyle}
      />
    </div>
  );
}

export default Chart;
