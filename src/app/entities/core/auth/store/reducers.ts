import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/auth-state.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.actions';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.actions';
import { getActiveUserAction, getActiveUserFailureAction, getActiveUserSuccessAction } from './actions/get-active-user.actions';
import { logoutAction, logoutFailureAction, logoutSuccessAction } from './actions/logout.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  activeUser: null,
  error: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      activeUser: action.activeUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      activeUser: action.activeUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error,
    })
  ),
  on(
    getActiveUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getActiveUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      activeUser: action.activeUser,
    })
  ),
  on(
    getActiveUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      activeUser: null,
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    logoutSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      activeUser: null,
    })
  ),
  on(
    logoutFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      activeUser: null,
    })
  ),
);

export const reducers = (state: AuthStateInterface, action: Action) => {
  return authReducer(state, action);
};
