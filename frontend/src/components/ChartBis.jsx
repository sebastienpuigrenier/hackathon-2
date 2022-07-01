import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function ChartBis(input) {
  const { arrayData } = input;

  return (
    <div>
      <PieChart
        data={arrayData}
        lineWidth={20}
        paddingAngle={18}
        rounded
        style={{ height: "300px", width: "100%" }}
        label={({ dataEntry }) => `${dataEntry.value} ${dataEntry.title}`}
        labelStyle={(index) => ({
          fill: arrayData[index].color,
          fontSize: "4px",
          fontFamily: "sans-serif",
        })}
        labelPosition={60}
      />
    </div>
  );
}

export default ChartBis;
