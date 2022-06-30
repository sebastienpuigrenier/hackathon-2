import React, { useEffect, useState } from "react";
import { api } from "@services/services";
import MessageBoard from "@components/MessageBoard";
import "../styles/Project.css";

function Project() {
  const projectId = "ilytkfqngrotuihg15687651";

  const [detailProject, setDetailProject] = useState("");

  useEffect(() => {
    const ENDPOINT = `/projects/${projectId}`;

    api.get(ENDPOINT).then((res) => {
      setDetailProject(res.data);
    });
  }, []);

  return (
    <div>
      <div className="center-header">
        <div className="header-project">
          <h1>DETAILED PROJECT</h1>
        </div>
      </div>
      <div className="title-project">
        <h1>{detailProject.name}</h1>
      </div>
      <div className="section-project">
        <h2>Customer</h2>
        <p>{detailProject.customer}</p>
      </div>
      <div className="section-project">
        <h2>Language</h2>
        <p>A VENIR</p>
      </div>
      <div className="section-project">
        <h2>Description</h2>
        <p>{detailProject.description}</p>
      </div>
      <div className="section-project">
        <h2>goals</h2>
        <p>{detailProject.goals}</p>
      </div>
      <div className="section-project">
        <h2>Contributors</h2>
        <p>A VENIR</p>
      </div>
      <div className="section-project">
        <h2>Keywords</h2>
        <p>A VENIR</p>
      </div>
      <div className="ZONEDECOMMENTAIRE">
        <h1>COMMENTAIRES</h1>
        <MessageBoard projectId={projectId} />
      </div>
    </div>
  );
}
export default Project;
