import { Action, createReducer, on } from "@ngrx/store";
import { MeasurementStateInterface } from "../types/measurement-state.interface";
import {
  saveAction,
  saveFailureAction,
  saveSuccessAction,
} from "./actions/save.actions";
import {
  generateAction,
  generateFailureAction,
  generateSuccessAction,
} from "./actions/generate.actions";
import { resetAction } from "./actions/reset.actions";
import {
  getAllAction,
  getAllFailureAction,
  getAllSuccessAction,
} from "./actions/get-all.actions";
import {
  deleteAction,
  deleteSuccessAction,
  deleteFailureAction,
} from "./actions/delete.actions";

const initialState: MeasurementStateInterface = {
  isSubmitting: false,
  isLoading: false,
  measurement: null,
  measurements: null,
  generatedResult: null,
  error: null,
};

const measurementReducer = createReducer(
  initialState,
  on(resetAction, () => initialState),
  on(
    saveAction,
    (state): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      measurement: null,
      generatedResult: null,
    })
  ),
  on(
    saveSuccessAction,
    (state): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      generatedResult: null,
    })
  ),
  on(
    saveFailureAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  ),
  on(
    generateAction,
    (state): MeasurementStateInterface => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
      error: null,
    })
  ),
  on(
    generateSuccessAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      measurement: action.result.measurement,
      generatedResult: action.result.generatedResult,
    })
  ),
  on(
    generateFailureAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    getAllAction,
    (state): MeasurementStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    getAllSuccessAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      measurements: action.measurements,
    })
  ),
  on(
    getAllFailureAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  ),
  on(
    deleteAction,
    (state): MeasurementStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    deleteSuccessAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      measurements: state.measurements.filter(({ id }) => id !== action.id),
    })
  ),
  on(
    deleteFailureAction,
    (state, action): MeasurementStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  )
);

export const reducers = (state: MeasurementStateInterface, action: Action) => {
  return measurementReducer(state, action);
};
