import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import {
  getActiveUserAction,
  getActiveUserFailureAction,
  getActiveUserSuccessAction,
} from '../actions/get-active-user.actions';
import { ActiveUserInterface } from '../../types/active-user.interface';
import { TokensService } from '../../services/tokens.service';

@Injectable()
export class GetActiveUserEffect {
  getActiveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActiveUserAction),
      switchMap(() => {
        const accessToken = this.tokensService.getAccessToken();

        if (!accessToken) {
          return of(getActiveUserFailureAction());
        }

        return this.authService.getActiveUser().pipe(
          map((activeUser: ActiveUserInterface) => {
            return getActiveUserSuccessAction({ activeUser });
          }),
          catchError(() => {
            return of(getActiveUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokensService: TokensService
  ) {}
}
