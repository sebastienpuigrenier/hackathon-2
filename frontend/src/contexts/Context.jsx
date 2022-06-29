import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [isLog, setIsLog] = useState(true);

  return (
    <Context.Provider
      value={{
        isLog,
        setIsLog,
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
