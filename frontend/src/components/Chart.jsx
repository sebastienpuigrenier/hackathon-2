import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import { PieChart } from "react-minimal-pie-chart";

function Chart() {
  const [arrayData, setarrayData] = useState([]);

  useEffect(() => {
    const API = `/projects`;

    api
      .get(API)
      .then((res) => res.data)
      .then((data) => {
        const categories = [];
        console.warn("data", data);

        data.status.forEach((proj) => categories.push(proj.status[0].id));

        console.warn("categories", categories);

        const uniqueCategories = [...new Set(categories)];
        setarrayData(
          uniqueCategories.map((cat) => {
            let catCount = 0;
            categories.forEach((c) => {
              if (c === cat) {
                catCount += 1;
              }
            });

            return {
              catName: cat,
              catCount,
            };
          })
        );
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
//     { status: "One", value: 10, color: "#E38627" },
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
