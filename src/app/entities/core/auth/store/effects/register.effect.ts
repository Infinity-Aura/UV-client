import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthResponseInterface } from '../../types/auth-response.interface';
import { TokensService } from '../../services/tokens.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((response: AuthResponseInterface) => {
            this.tokensService.storeTokens(response.tokens);
            return registerSuccessAction({ activeUser: response.user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ error: errorResponse.message }));
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
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
