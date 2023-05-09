interface GlobalStateContextValue {
  employeeData: any;
  setEmployeeData: (data: any) => void;
}
interface GlobalStateProviderProps {
  children: React.ReactNode;
}
