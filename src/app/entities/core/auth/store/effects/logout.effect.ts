import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import {
  logoutAction,
  logoutFailureAction,
  logoutSuccessAction,
} from '../actions/logout.actions';
import { AuthService } from '../../services/auth.service';
import { TokensService } from '../../services/tokens.service';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            this.tokensService.removeTokens();
            return logoutSuccessAction();
          }),
          catchError(() => {
            this.tokensService.removeTokens();
            return of(logoutFailureAction());
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokensService: TokensService,
    private router: Router
  ) {}
}
