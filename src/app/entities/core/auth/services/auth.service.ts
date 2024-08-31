import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'environments/environment';

import { RegisterRequestInterface } from '../types/register-request.interface';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { LoginRequestInterface } from '../types/login-request.interface';
import { TokensService } from './tokens.service';
import { ActiveUserInterface } from '../types/active-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokensService: TokensService) {}

  register(user: RegisterRequestInterface): Observable<AuthResponseInterface> {
    return this.http
      .post<AuthResponseInterface>(
        `${environment.apiURL}/authentication/registration`,
        user
      )
      .pipe(map(response => response));
  }

  login(user: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.http
      .post<AuthResponseInterface>(
        `${environment.apiURL}/authentication/login`,
        user
      )
      .pipe(map(response => response));
  }

  logout() {
    return this.http
      .post<any>(`${environment.apiURL}/authentication/logout`, {})
      .pipe(map(() => true));
  }

  getActiveUser(): Observable<ActiveUserInterface> {
    return this.http.get<ActiveUserInterface>(`${environment.apiURL}/authentication/user`).pipe(
      map(user => user)
    );
  }

  refreshTokens() {
    return this.http.post<any>(
      `${environment.apiURL}/authentication/refresh-tokens`,
      {
        refreshToken: this.tokensService.getRefreshToken(),
      }
    );
  }
}
