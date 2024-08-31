import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RadiometerStateInterface } from '../types/radiometer-state.interface';

export const radiometerFeatureSelector =
  createFeatureSelector<RadiometerStateInterface>('radiometer');

export const isSubmittingSelector = createSelector(
  radiometerFeatureSelector,
  (radiometerState: RadiometerStateInterface) => radiometerState.isSubmitting
);

export const errorSelector = createSelector(
  radiometerFeatureSelector,
  (radiometerState: RadiometerStateInterface) => radiometerState.error
);

export const radiometerSelector = createSelector(
  radiometerFeatureSelector,
  (radiometerState: RadiometerStateInterface) => radiometerState.radiometers
);

export const isLoadingSelector = createSelector(
  radiometerFeatureSelector,
  (radiometerState: RadiometerStateInterface) => radiometerState.isLoading
);
