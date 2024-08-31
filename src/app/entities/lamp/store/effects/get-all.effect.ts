import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError, map, of, switchMap } from "rxjs";

import {
  getAllAction,
  getAllFailureAction,
  getAllSuccessAction,
} from "../actions/get-all.actions";
import { LampService } from "../../services/lamp.service";
import { LampInterface } from "../../types/lamp.interface";

@Injectable()
export class GetAllEffect {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllAction),
      switchMap(() => {
        return this.lampService.getAll().pipe(
          map((response: LampInterface[]) => {
            return getAllSuccessAction({ lamps: response });
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
    private lampService: LampService
  ) {}
}
