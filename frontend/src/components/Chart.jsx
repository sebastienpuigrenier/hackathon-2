import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

function Chart(input) {
  const { arrayData } = input;
  const [selected, setSelected] = useState(1);
  const lineWidth = 60;

  return (
    <div>
      <PieChart
        data={arrayData}
        style={{ height: "300px", width: "100%" }}
        label={({ dataEntry }) =>
          `${Math.round(dataEntry.percentage)}% ${dataEntry.title}`
        }
        radius={PieChart.defaultProps.radius - 6}
        lineWidth={60}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        segmentsShift={(index) => (index === selected ? 6 : 1)}
        animate
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fontSize: "4px",
          fill: "#fff",
          opacity: 0.75,
          pointerEvents: "none",
        }}
        onClick={(_, index) => {
          setSelected(index === selected ? undefined : index);
        }}
      />
    </div>
  );
}

export default Chart;
