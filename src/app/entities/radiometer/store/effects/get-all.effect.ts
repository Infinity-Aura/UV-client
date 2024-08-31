import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";

import {
  getAllAction,
  getAllFailureAction,
  getAllSuccessAction,
} from "../actions/get-all.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { RadiometerService } from "../../services/radiometer.service";
import { RadiometerInterface } from "../../types/radiometer.interface";

@Injectable()
export class GetAllEffect {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllAction),
      switchMap(() => {
        return this.radiometerService.getAll().pipe(
          map((response: RadiometerInterface[]) => {
            return getAllSuccessAction({ radiometers: response });
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
    private radiometerService: RadiometerService
  ) {}
}
