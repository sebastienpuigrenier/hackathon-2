import React from "react";
import "../styles/ProjectsBoard.css";
// import axios from "axios";

function ProjectsBoard() {
  // const [data, setdata] = useState([]);

  // useEffect(() => {
  //   const API = `http://localhost:5000/`;
  //   axios
  //     .get(API)
  //     .then((res) => res.data)
  //     .then((data2) => {
  //       setdata(data2);
  //     })
  //     .catch((e) => console.error(e));
  // }, [data]);

  return (
    <div className="globalBoard">
      <div className="searchBar">
        <input
          id="search"
          type="select"
          name="search"
          placeholder="  Search project"
          className="input"
        />

        <input id="select" type="select" name="select" placeholder="  type" />
        <button className="buttonBoard" type="button">
          SEARCH
        </button>
      </div>
      <div className="ProjectsBoard">
        <h2>PROJECTS IN PROGRESS</h2>
      </div>
      <div className="blocCard">{/* <CardDashboard /> */}</div>

      <div className="ProjectsBoard">
        <h2>PROJECTS IN IDEAS</h2>
      </div>
      <div className="blocCard">{/* <CardDashboard /> */}</div>
    </div>
  );
}
export default ProjectsBoard;
