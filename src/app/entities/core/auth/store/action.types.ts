export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout success',
  LOGOUT_FAILURE = '[Auth] Logout failure',

  GET_ACTIVE_USER = '[Auth] Get active user',
  GET_ACTIVE_USER_SUCCESS = '[Auth] Get active user success',
  GET_ACTIVE_USER_FAILURE = '[Auth] Get active user failure',
}
