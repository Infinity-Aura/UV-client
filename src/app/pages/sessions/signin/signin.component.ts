import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loginAction } from 'app/entities/core/auth/store/actions/login.actions';
import { LoginRequestInterface } from 'app/entities/core/auth/types/login-request.interface';
import { errorSelector, isSubmittingSelector } from 'app/entities/core/auth/store/selectors';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  errorMsg$!: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errorMsg$ = this.store.pipe(select(errorSelector));
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const request: LoginRequestInterface = this.form.value;

    this.store.dispatch(loginAction({ request }));
  }
}
