import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import PieChart from "../components/Chart";
import "../styles/Statistics.css";

function Statistics() {
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

  /* **************
   */

  const [tabel, setTabel] = useState([]);
  const [lastYearStartedProjects, setLastYearStartedProjects] = useState({
    title: "started projects",
    color: "#C13C37",
  });
  const [lastYearStartedIdeas, setLastYearStartedIdeas] = useState({
    title: "started ideas",
    color: "#C13C37",
  });
  const [lastYearFinishedProjects, setlastYearFinishedProjects] = useState({
    title: "finished projects",
    color: "#6A2135",
  });

  useEffect(() => {
    if (
      lastYearStartedProjects.value &&
      lastYearStartedIdeas.value &&
      lastYearFinishedProjects.value
    ) {
      setTabel([
        lastYearStartedProjects,
        lastYearStartedIdeas,
        lastYearFinishedProjects,
      ]);
    }
  }, [lastYearStartedProjects, lastYearStartedIdeas, lastYearFinishedProjects]);

  useEffect(() => {
    const ENDPOINT_PROJ = "/projects/ongoing/";
    const API_IDEAS = "/projects/idea/";
    const DATA_FP = "/projects/finished/";

    api
      .get(ENDPOINT_PROJ)
      .then((resultA) => {
        return resultA.data.filter(
          (ev) => ev.update_to_project_date.slice(0, 4) === "2021"
        );
      })
      .then((arrayOngoingData) => {
        setLastYearStartedProjects({
          ...lastYearStartedProjects,
          value: arrayOngoingData.length,
        });
      });

    api
      .get(API_IDEAS)
      .then((resultatB) => {
        return resultatB.data.filter(
          (ev1) => ev1.creation_date.slice(0, 4) === "2021"
        );
      })
      .then((arrayIdeasData) =>
        setLastYearStartedIdeas({
          ...lastYearStartedIdeas,
          value: arrayIdeasData.length,
        })
      );

    api
      .get(DATA_FP)
      .then((resultFinished3) => {
        return resultFinished3.data.filter(
          (ev1) => ev1.update_to_finish_date.slice(0, 4) === "2021"
        );
      })
      .then((arrayFinishedData) =>
        setlastYearFinishedProjects({
          ...lastYearFinishedProjects,
          value: arrayFinishedData.length,
        })
      );
  }, []);

  return (
    <div className="statistics">
      <div className="header-title-chart">
        <h2>some statistics</h2>
      </div>
      <div className="chart-container">
        <div>
          <PieChart arrayData={arrayData} />
          <div>
            <p>Projets suivant leur statut</p>
          </div>
        </div>
        <div>
          <PieChart arrayData={tabel} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
