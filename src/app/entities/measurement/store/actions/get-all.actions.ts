import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action.types";
import { GetAllResponseInterface } from "../../types/get-all-response.interface";

export const getAllAction = createAction(ActionTypes.GET_ALL);

export const getAllSuccessAction = createAction(
  ActionTypes.GET_ALL_SUCCESS,
  props<{ measurements: GetAllResponseInterface[] }>()
);

export const getAllFailureAction = createAction(
  ActionTypes.GET_ALL_FAILURE,
  props<{ error: string }>()
);
