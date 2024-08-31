import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { ActionTypes } from '../action.types';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { ActiveUserInterface } from '../../types/active-user.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ activeUser: ActiveUserInterface }>()
);

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE,
  props<{ error: string }>());
