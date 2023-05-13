import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext<GlobalStateContextValue>({
  employeeData: null,
  setEmployeeData: () => {},
  reportData: null,
  setReportData: () => {},
});

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [employeeData, setEmployeeData] = useState<any>(null);
  const [reportData, setReportData] = useState<any>(null);
  return (
    <GlobalStateContext.Provider
      value={{ employeeData, setEmployeeData, reportData, setReportData }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
