import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action.types';
import { ActiveUserInterface } from '../../types/active-user.interface';

export const getActiveUserAction = createAction(ActionTypes.GET_ACTIVE_USER);

export const getActiveUserSuccessAction = createAction(
  ActionTypes.GET_ACTIVE_USER_SUCCESS,
  props<{ activeUser: ActiveUserInterface }>()
);

export const getActiveUserFailureAction = createAction(
  ActionTypes.GET_ACTIVE_USER_FAILURE
);
