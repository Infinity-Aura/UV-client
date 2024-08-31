import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginEffect } from './store/effects/login.effect';
import { PersistenceService } from 'app/shared/services/persistence.service';
import { TokensService } from './services/tokens.service';
import { GetActiveUserEffect } from './store/effects/get-active-user.effect';
import { LogoutEffect } from './store/effects/logout.effect';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [],
  providers: [
    AuthService,
    TokensService,
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      LogoutEffect,
      GetActiveUserEffect,
    ]),
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
