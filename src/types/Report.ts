export type Report = {
  id: number;
  reportType: string;
  dateOfEvent: string;
  submittedTo: number;
  submittedBy: number;
  immediateActionTaken: string;
  projectId: string;
  imageAddress: string;
  projectLocationLongitude: string;
  projectLocationLatitude: string;
  dateOfSubmission: Date;
  projectDescription: string;
};
