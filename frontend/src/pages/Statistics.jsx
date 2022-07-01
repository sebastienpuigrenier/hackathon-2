import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import CardDashboard from "@components/CardDashboard";
import PieChart from "../components/Chart";
import PieChart2 from "../components/ChartBis";

import "../styles/Statistics.css";

function Statistics() {
  const [arrayData, setarrayData] = useState([]);
  const [statOngoing, setStatOngoing] = useState({
    title: "Ongoing",
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
    title: "New Projects",
    color: "#e79759",
  });
  const [lastYearStartedIdeas, setLastYearStartedIdeas] = useState({
    title: "New Ideas",
    color: "#183650",
  });
  const [lastYearFinishedProjects, setlastYearFinishedProjects] = useState({
    title: "Finished Projects",
    color: "#949494",
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

  const projectidmorelike = "lykfjgklftylg8523164";
  const [projectmoreliked, setprojectmoreliked] = useState({});
  useEffect(() => {
    const ENDPOINT = `/projects/${projectidmorelike}`;
    api.get(ENDPOINT).then((result) => {
      setprojectmoreliked(result.data);
    });
  }, []);

  const projectmorecontributors = "ilytkqsdngr654ssfeqfe51";
  const [projectcontributors, setprojectcontributors] = useState({});
  useEffect(() => {
    const ENDPOINT = `/projects/${projectmorecontributors}`;
    api.get(ENDPOINT).then((result) => {
      setprojectcontributors(result.data);
    });
  }, []);

  return (
    <div className="statistics">
      <div>
        <div className="header-title-chart">
          <h2>let's see some figures</h2>
        </div>
        <div className="chart-container">
          <div className="chart1">
            <PieChart arrayData={arrayData} />
            <p>Projects status current distribution</p>
          </div>
          <div className="chart2">
            <PieChart2 arrayData={tabel} />
            <p>For the year 2021</p>
          </div>
        </div>

      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h2>More liked Project</h2>
          <CardDashboard info={projectmoreliked} />
        </div>
        <div>
          <h2>Top Contributors Project</h2>
          <CardDashboard info={projectcontributors} />
        </div>
        <div>
          <h2>Best Contributor</h2>
          <p>Christophe Boinet</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
