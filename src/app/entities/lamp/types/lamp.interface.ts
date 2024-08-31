export interface LampInterface {
  _id: string
  name: string;
  illuminanceMeasurementRange: number;
  illuminanceMeasurementErrorLimit: number;
  wavelength: number;
  powerSupply: string;
}
