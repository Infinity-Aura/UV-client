import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "environments/environment";
import { LampInterface } from "../types/lamp.interface";

@Injectable({
  providedIn: "root",
})
export class LampService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<LampInterface[]> {
    return this.http
      .get<LampInterface[]>(`${environment.apiURL}/lamps`)
      .pipe(map((response) => response));
  }
}
