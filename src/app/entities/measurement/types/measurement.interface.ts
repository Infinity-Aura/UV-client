import { Steps } from "./steps.interface";

export interface MeasurementInterface {
  ownerId: string;
  lampId: string;
  radiometerId: string;
  location: string;
  date: Date;
  steps: Steps;
  status: string;
}
