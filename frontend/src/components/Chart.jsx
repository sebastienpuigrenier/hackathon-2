import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import { PieChart } from "react-minimal-pie-chart";

function Chart() {
  const [arrayData, setarrayData] = useState([]);
  const [statOngoing, setStatOngoing] = useState({
    catName: "ongoing",
  });
  const [statIdea, setStatIdea] = useState({
    catName: "Idea",
  });
  const [statFinished, setStatFinished] = useState({
    catName: "Finished",
  });

  useEffect(() => {
    if (statOngoing.catNumber && statIdea.catNumber && statFinished.catNumber) {
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
        catNumber: result.length,
      });
    });

    console.warn("statOngoing", statOngoing);

    api.get(API).then((result) => {
      setStatIdea({
        ...statIdea,
        catNumber: result.length,
      });
    });

    api.get(DATA).then((result) => {
      setStatFinished({
        ...statFinished,
        catNumber: result.length,
      });
    });
  }, []);

  console.warn("arrayData", arrayData);

  //   const totalNumberOfProjects = arrayData.length;
  //   console.log("totalNumberOfProjects", totalNumberOfProjects);

  //   const numberOfProjects = arrayData.filter(
  //     (project) => project.status === "PROJECT"
  //   );
  //   console.log("numberOfProjects", numberOfProjects);

  //   const numberOfIdeas = arrayData.filter(
  //     (project) => project.status === "IDEA"
  //   );
  //   console.log("numberOfIdeas", numberOfIdeas);

  //   const numberOfFinished = arrayData.filter(
  //     (project) => project.status === "FINISHED"
  //   );
  //   console.log("numberOfFinished", numberOfFinished);

  //   const dataMock = [
  //     { title: "One", value: 10, color: "#E38627" },
  //     { title: "Two", value: 15, color: "#C13C37" },
  //     { title: "Three", value: 20, color: "#6A2135" },
  //   ];

  const defaultLabelStyle = {
    fontSize: "5px",
    fontFamily: "sans-serif",
  };

  return (
    <div>
      <PieChart
        data={arrayData}
        style={{ height: "300px" }}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelStyle={defaultLabelStyle}
      />
    </div>
  );
}

export default Chart;
