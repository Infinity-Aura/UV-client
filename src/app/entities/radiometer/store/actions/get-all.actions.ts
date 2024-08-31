import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action.types";
import { RadiometerInterface } from "../../types/radiometer.interface";

export const getAllAction = createAction(ActionTypes.GET_ALL);

export const getAllSuccessAction = createAction(
  ActionTypes.GET_ALL_FAILURE,
  props<{ radiometers: RadiometerInterface[] }>()
);

export const getAllFailureAction = createAction(
  ActionTypes.GET_ALL_FAILURE,
  props<{ error: string }>()
);
