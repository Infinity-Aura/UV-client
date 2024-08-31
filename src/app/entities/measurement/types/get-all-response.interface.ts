import { GenerateResultInterface } from "./generate-result.interface";
import { MeasurementInterface } from "./measurement.interface";

export interface GetAllResponseInterface {
  id: string;
  ownerId: string;
  lampName: string;
  radiometerName: string;
  location: string;
  date: string;
  status: string;
}
