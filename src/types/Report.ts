export type Report = {
  id: number;
  dateOfEvent: string;
  dateOfSubmission: Date;
  imageAddress: string;
  immidiateActionTaken: string;
  projectId: string;
  submittedBy: number;
  submittedTo: number;
  location: {
    projectLoactionLongitude: string;
    projectLocationLatitude: string;
  };
  reportType: string;
};
