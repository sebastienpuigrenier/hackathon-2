import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  // Ajouter ici vos useState pour créer un state dans le context
  const [exemple, setExemple] = useState("");

  // Ajouter ici si besoin le useEffect de votre state
  useEffect(() => {
    setExemple("");
  }, []);

  return (
    <Context.Provider
      value={{
        // Ajouter ici vos variables a passer dans le context
        exemple,
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
