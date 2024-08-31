import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import {
  deleteAction,
  deleteFailureAction,
  deleteSuccessAction,
} from "../actions/delete.actions";
import { MeasurementService } from "../../services/measurement.service";

@Injectable()
export class DeleteEffect {
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAction),
      switchMap(({ id }) => {
        return this.measurementService.delete(id).pipe(
          map((id: string) => {
            return deleteSuccessAction({ id });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteFailureAction({ error: errorResponse.message }));
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
