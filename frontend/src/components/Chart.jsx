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
        style={{ height: "250px" }}
        label={({ dataEntry }) =>
          `${Math.round(dataEntry.percentage)}% ${dataEntry.title}`
        }
        labelStyle={defaultLabelStyle}
      />
    </div>
  );
}

export default Chart;
