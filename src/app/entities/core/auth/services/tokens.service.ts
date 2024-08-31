import { Injectable } from '@angular/core';

import { PersistenceService } from 'app/shared/services/persistence.service';

import { Tokens } from '../models/tokens';

@Injectable()
export class TokensService {
  private readonly accessToken = 'access_token';
  private readonly refreshToken = 'refresh_token';

  constructor(private persistenceService: PersistenceService) {}

  getAccessToken() {
    return this.persistenceService.get(this.accessToken);
  }

  getRefreshToken() {
    return this.persistenceService.get(this.refreshToken);
  }

  storeAccessToken(accessToken: string) {
    this.persistenceService.set(this.accessToken, accessToken);
  }

  storeRefreshToken(refreshToken: string) {
    this.persistenceService.set(this.refreshToken, refreshToken);
  }

  storeTokens(tokens: Tokens) {
    this.persistenceService.set(this.accessToken, tokens.accessToken);
    this.persistenceService.set(this.refreshToken, tokens.refreshToken);
  }

  removeTokens() {
    this.persistenceService.remove(this.accessToken);
    this.persistenceService.remove(this.refreshToken);
  }
}
