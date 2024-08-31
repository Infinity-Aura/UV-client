import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action.types';
import { MeasurementInterface } from '../../types/measurement.interface';
import { GenerateResponseInterface } from '../../types/generate-response.interface';

export const generateAction = createAction(
  ActionTypes.GENERATE,
  props<{ request: Partial<MeasurementInterface> }>()
);

export const generateSuccessAction = createAction(
  ActionTypes.GENERATE_SUCCESS,
  props<{ result: GenerateResponseInterface }>()
);

export const generateFailureAction = createAction(ActionTypes.GENERATE_FAILURE,
  props<{ error: string }>());
