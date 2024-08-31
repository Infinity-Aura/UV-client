import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import {
  getAllAction,
  getAllFailureAction,
  getAllSuccessAction,
} from "../actions/get-all.actions";
import { MeasurementService } from "../../services/measurement.service";
import { GetAllResponseInterface } from "../../types/get-all-response.interface";

@Injectable()
export class GetAllEffect {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllAction),
      switchMap(() => {
        return this.measurementService.getAll().pipe(
          map((response: GetAllResponseInterface[]) => {
            return getAllSuccessAction({ measurements: response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getAllFailureAction({ error: errorResponse.message }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private measurementService: MeasurementService
  ) {}
}
