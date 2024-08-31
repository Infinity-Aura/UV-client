import { HttpErrorResponse } from "@angular/common/http";

import { ActiveUserInterface } from "./active-user.interface";

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  activeUser: ActiveUserInterface | null;
  error: string | null;
}