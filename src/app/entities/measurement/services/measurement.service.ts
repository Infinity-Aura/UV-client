import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "environments/environment";
import { MeasurementInterface } from "../types/measurement.interface";
import { GenerateResponseInterface } from "../types/generate-response.interface";
import { GetAllResponseInterface } from "../types/get-all-response.interface";

@Injectable({
  providedIn: "root",
})
export class MeasurementService {
  constructor(private http: HttpClient) {}

  save(measurement: MeasurementInterface): Observable<MeasurementInterface> {
    return this.http
      .post<MeasurementInterface>(
        `${environment.apiURL}/measurements`,
        measurement
      )
      .pipe(map((response) => response));
  }

  generate(
    measurement: Partial<MeasurementInterface>
  ): Observable<GenerateResponseInterface> {
    return this.http
      .post<GenerateResponseInterface>(
        `${environment.apiURL}/measurements/generate`,
        measurement
      )
      .pipe(map((response) => response));
  }

  getAll(): Observable<GetAllResponseInterface[]> {
    return this.http
      .get<GetAllResponseInterface[]>(`${environment.apiURL}/measurements/own`)
      .pipe(map((response) => response));
  }

  delete(id: string) {
    return this.http
      .delete(`${environment.apiURL}/measurements/${id}`)
      .pipe(map((response: { id: string }) => response.id));
  }
}
