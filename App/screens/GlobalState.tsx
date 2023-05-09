import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext<GlobalStateContextValue>({
  employeeData: null,
  setEmployeeData: () => {},
});

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [employeeData, setEmployeeData] = useState<any>(null);

  return (
    <GlobalStateContext.Provider value={{ employeeData, setEmployeeData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
