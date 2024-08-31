import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { activeUserSelector } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, public store: Store) {}
  
  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(activeUserSelector),
      map(activeUser => !!activeUser),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/sessions/signin');
        }
      })
    );
  }
}
