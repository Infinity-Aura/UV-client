import { Action, createReducer, on } from "@ngrx/store";

import { LampStateInterface } from "../types/lamp-state.interface";
import {
  getAllAction,
  getAllFailureAction,
  getAllSuccessAction,
} from "./actions/get-all.actions";

const initialState: LampStateInterface = {
  isSubmitting: false,
  isLoading: false,
  lamps: null,
  error: null,
};

const lampReducer = createReducer(
  initialState,
  on(
    getAllAction,
    (state): LampStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    getAllSuccessAction,
    (state, action): LampStateInterface => ({
      ...state,
      isSubmitting: false,
      lamps: action.lamps,
    })
  ),
  on(
    getAllFailureAction,
    (state, action): LampStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  ),
);

export const reducers = (state: LampStateInterface, action: Action) => {
  return lampReducer(state, action);
};
