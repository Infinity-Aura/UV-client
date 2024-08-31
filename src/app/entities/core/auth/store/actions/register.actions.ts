import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { ActionTypes } from '../action.types';
import { RegisterRequestInterface } from '../../types/register-request.interface';
import { ActiveUserInterface } from '../../types/active-user.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ activeUser: ActiveUserInterface }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE,
  props<{ error: string }>());
