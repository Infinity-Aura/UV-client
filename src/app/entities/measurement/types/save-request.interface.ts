import { StatusSteps } from "./status-steps.interface";
import { Steps } from "./steps.interface";

export interface SaveRequestInterface {
  ownerId: string;
  lampId: string;
  radiometerId: string;
  location: string;
  date: Date;
  steps: Steps;
  statusSteps: StatusSteps;
}
