import { GenerateResultInterface } from "./generate-result.interface";
import { MeasurementInterface } from "./measurement.interface";

export interface GenerateResponseInterface {
  measurement: MeasurementInterface;
  generatedResult: GenerateResultInterface;
}
