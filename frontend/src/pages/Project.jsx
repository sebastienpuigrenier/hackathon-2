import React from "react";

import MessageBoard from "@components/MessageBoard";

function Project() {
  const projectId = "ilytkfqngrotuihg15687651";
  return (
    <div>
      <h1>Ceci est la Page project</h1>
      <p>Précision d’un projet + historique du projet</p>
      <MessageBoard projectId={projectId} />
    </div>
  );
}
export default Project;
