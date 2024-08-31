import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action.types";
import { LampInterface } from "../../types/lamp.interface";

export const getAllAction = createAction(ActionTypes.GET_ALL);

export const getAllSuccessAction = createAction(
  ActionTypes.GET_ALL_FAILURE,
  props<{ lamps: LampInterface[] }>()
);

export const getAllFailureAction = createAction(
  ActionTypes.GET_ALL_FAILURE,
  props<{ error: string }>()
);
