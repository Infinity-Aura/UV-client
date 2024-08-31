import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseInterface } from '../../types/auth-response.interface';
import { TokensService } from '../../services/tokens.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((response: AuthResponseInterface) => {
            this.tokensService.storeTokens(response.tokens);
            return loginSuccessAction({ activeUser: response.user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ error: errorResponse.message }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
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
