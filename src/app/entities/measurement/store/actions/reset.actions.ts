import { createAction } from "@ngrx/store";

import { ActionTypes } from "../action.types";

export const resetAction = createAction(ActionTypes.RESET);
