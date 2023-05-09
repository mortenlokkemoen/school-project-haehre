interface GlobalStateContextValue {
  employeeData: any;
  setEmployeeData: (data: any) => void;
  reportData: any;
  setReportData: (data: any) => void;
}
interface GlobalStateProviderProps {
  children: React.ReactNode;
}
