import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import {
  generateAction,
  generateFailureAction,
  generateSuccessAction,
} from "../actions/generate.actions";
import { MeasurementService } from "../../services/measurement.service";
import { GenerateResponseInterface } from "../../types/generate-response.interface";

@Injectable()
export class GenerateEffect {
  generate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateAction),
      switchMap(({ request }) => {
        return this.measurementService.generate(request).pipe(
          map((result: GenerateResponseInterface) => {
            return generateSuccessAction({ result });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(generateFailureAction({ error: errorResponse.message }));
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
