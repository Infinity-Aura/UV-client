import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action.types';
import { MeasurementInterface } from '../../types/measurement.interface';

export const saveAction = createAction(
  ActionTypes.SAVE,
  props<{ request: MeasurementInterface }>()
);

export const saveSuccessAction = createAction(
  ActionTypes.SAVE_SUCCESS,
  props<{ measurement: MeasurementInterface }>()
);

export const saveFailureAction = createAction(ActionTypes.SAVE_FAILURE,
  props<{ error: string }>());
