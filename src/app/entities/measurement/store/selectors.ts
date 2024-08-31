import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MeasurementStateInterface } from '../types/measurement-state.interface';

export const measurementFeatureSelector =
  createFeatureSelector<MeasurementStateInterface>('measurement');

export const isSubmittingSelector = createSelector(
  measurementFeatureSelector,
  (measurementState: MeasurementStateInterface) => measurementState.isSubmitting
);

export const measurementSelector = createSelector(
  measurementFeatureSelector,
  (measurementState: MeasurementStateInterface) => measurementState.measurement
);

export const getAllSelector = createSelector(
  measurementFeatureSelector,
  (measurementState: MeasurementStateInterface) => measurementState.measurements
);

export const generatedResultSelector = createSelector(
  measurementFeatureSelector,
  (measurementState: MeasurementStateInterface) => measurementState.generatedResult
);


export const errorSelector = createSelector(
  measurementFeatureSelector,
  (measurementState: MeasurementStateInterface) => measurementState.error
);

export const isLoadingSelector = createSelector(
  measurementFeatureSelector,
  (measurementState: MeasurementStateInterface) => measurementState.isLoading
);
