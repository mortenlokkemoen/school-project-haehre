export type EmployeeType = {
  employee_Id: number;
  employee_Name: string;
  employee_Email: string;
  employee_Password: string;
  employee_JobTitle: string;
  current_Project: number;
  current_Manager: number;
  project_Longitude?: string;
  project_Latitude?: string;
};
