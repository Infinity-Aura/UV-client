import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "environments/environment";
import { RadiometerInterface } from "../types/radiometer.interface";

@Injectable({
  providedIn: "root",
})
export class RadiometerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<RadiometerInterface[]> {
    return this.http
      .get<RadiometerInterface[]>(`${environment.apiURL}/radiometers`)
      .pipe(map((response) => response));
  }
}
