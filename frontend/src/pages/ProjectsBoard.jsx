import React from "react";
import axios from "axios";

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
    <div>
          <div className="searchBar">
                <input
                    id="search"
                    
                    type="select"
                    name="search"
                    placeholder="Type something: Mojito, Lemon..."
                    className="input"
                    
                  /> 
                  <input
                    value="Submit"
                    type="image"
                    id="image"
                  
                    alt=""
                    className="image-logo"
                  />
                <input
                    id="select"
                    
                    type="select"
                    name="select"
                    placeholder="type"
                    className="input"
                  
                  />
                  <button>SEARCH</button>
          </div>
            <div className="Projects">
              <h2>PROJECTS IN PROGRESS</h2>
                  <div className="blocCard">
                  {/* <CardDashboard /> */}
                  </div>
              </div>
            <div className="Projects">
              <h2>PROJECTS IN IDEAS</h2>
                <div className="blocCard">
                {/* <CardDashboard /> */}
                </div>
            </div>
      
      
    </div>
  );
}
export default ProjectsBoard;
