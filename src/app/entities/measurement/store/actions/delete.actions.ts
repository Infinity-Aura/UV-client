import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action.types";

export const deleteAction = createAction(
  ActionTypes.DELETE,
  props<{ id: string }>()
);

export const deleteSuccessAction = createAction(
  ActionTypes.DELETE_SUCCESS,
  props<{ id: string }>()
);

export const deleteFailureAction = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ error: string }>()
);
