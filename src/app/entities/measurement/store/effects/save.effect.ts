import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";

import {
  saveAction,
  saveFailureAction,
  saveSuccessAction,
} from "../actions/save.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { MeasurementService } from "../../services/measurement.service";
import { MeasurementInterface } from "../../types/measurement.interface";
import { Router } from "@angular/router";

@Injectable()
export class SaveEffect {
  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveAction),
      switchMap(({ request }) => {
        return this.measurementService.save(request).pipe(
          map((response: MeasurementInterface) => {
            return saveSuccessAction({ measurement: response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(saveFailureAction({ error: errorResponse.message }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/profile/table');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private measurementService: MeasurementService,
    private router: Router
  ) {}
}
