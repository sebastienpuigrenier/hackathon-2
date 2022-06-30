import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import { PieChart } from "react-minimal-pie-chart";

function Chart() {
  const [arrayData, setarrayData] = useState([]);
  const [statOngoing, setStatOngoing] = useState({
    title: "ongoing",
    color: "#E38627",
  });
  const [statIdea, setStatIdea] = useState({
    title: "Idea",
    color: "#C13C37",
  });
  const [statFinished, setStatFinished] = useState({
    title: "Finished",
    color: "#6A2135",
  });

  useEffect(() => {
    if (statOngoing.value && statIdea.value && statFinished.value) {
      setarrayData([statOngoing, statIdea, statFinished]);
    }
  }, [statOngoing, statIdea, statFinished]);

  useEffect(() => {
    const ENDPOINT = "/projects/ongoing/";
    const API = "/projects/idea/";
    const DATA = "/projects/finished/";

    api.get(ENDPOINT).then((result) => {
      setStatOngoing({
        ...statOngoing,
        value: parseInt(result.data.length),
      });
    });

    api.get(API).then((resultat) => {
      setStatIdea({
        ...statIdea,
        value: parseInt(resultat.data.length),
      });
    });

    api.get(DATA).then((resultFinished) => {
      setStatFinished({
        ...statFinished,
        value: resultFinished.data.length,
      });
    });
  }, []);

  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  return (
    <div>
      <PieChart
        data={arrayData}
        style={{ height: "300px" }}
        label={({ dataEntry }) =>
          // eslint-disable-next-line no-useless-concat
          `${Math.round(dataEntry.percentage)}% ` + `${dataEntry.title}`
        }
        labelStyle={defaultLabelStyle}
      />
    </div>
  );
}

export default Chart;
