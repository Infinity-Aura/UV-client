import { Action, createReducer, on } from "@ngrx/store";

import { RadiometerStateInterface } from "../types/radiometer-state.interface";
import {
  getAllAction,
  getAllFailureAction,
  getAllSuccessAction,
} from "./actions/get-all.actions";

const initialState: RadiometerStateInterface = {
  isSubmitting: false,
  isLoading: false,
  radiometers: null,
  error: null,
};

const radiometerReducer = createReducer(
  initialState,
  on(
    getAllAction,
    (state): RadiometerStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    getAllSuccessAction,
    (state, action): RadiometerStateInterface => ({
      ...state,
      isSubmitting: false,
      radiometers: action.radiometers,
    })
  ),
  on(
    getAllFailureAction,
    (state, action): RadiometerStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  ),
);

export const reducers = (state: RadiometerStateInterface, action: Action) => {
  return radiometerReducer(state, action);
};
