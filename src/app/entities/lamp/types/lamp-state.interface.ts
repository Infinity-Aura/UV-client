import { LampInterface } from "./lamp.interface";

export interface LampStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  lamps: LampInterface[] | null;
  error: string | null;
}