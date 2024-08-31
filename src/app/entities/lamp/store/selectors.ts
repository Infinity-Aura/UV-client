import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LampStateInterface } from '../types/lamp-state.interface';

export const lampFeatureSelector =
  createFeatureSelector<LampStateInterface>('lamp');

export const isSubmittingSelector = createSelector(
  lampFeatureSelector,
  (lampState: LampStateInterface) => lampState.isSubmitting
);

export const errorSelector = createSelector(
  lampFeatureSelector,
  (lampState: LampStateInterface) => lampState.error
);

export const lampSelector = createSelector(
  lampFeatureSelector,
  (lampState: LampStateInterface) => lampState.lamps
);

export const isLoadingSelector = createSelector(
  lampFeatureSelector,
  (lampState: LampStateInterface) => lampState.isLoading
);
