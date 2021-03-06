import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  // Ajouter ici vos useState pour créer un state dans le context
  const [isLog, setIsLog] = useState();
  const [userContext, setUserContext] = useState();
  const [currentProject, setCurrentProject] = useState();

  // Ajouter ici si besoin le useEffect de votre state
  useEffect(() => {
    setIsLog(false);
    setUserContext({});
    setCurrentProject({});
  }, []);

  return (
    <Context.Provider
      value={{
        // Ajouter ici vos variables a passer dans le context
        isLog,
        setIsLog,
        userContext,
        setUserContext,
        currentProject,
        setCurrentProject,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const ExportContext = {
  Context,
  Provider,
};

export default ExportContext;
