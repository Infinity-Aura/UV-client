import { RadiometerInterface } from "./radiometer.interface";

export interface RadiometerStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  radiometers: RadiometerInterface[] | null;
  error: string | null;
}