import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/auth-state.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.error
);

export const activeUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.activeUser
);

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoading
);
