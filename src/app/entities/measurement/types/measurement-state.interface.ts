import { GenerateResultInterface } from "./generate-result.interface";
import { GetAllResponseInterface } from "./get-all-response.interface";
import { MeasurementInterface } from "./measurement.interface";

export interface MeasurementStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  measurement: MeasurementInterface | null;
  measurements: GetAllResponseInterface[] | null;
  generatedResult: GenerateResultInterface | null;
  error: string | null;
}