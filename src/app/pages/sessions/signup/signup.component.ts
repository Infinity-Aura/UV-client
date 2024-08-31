import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'app/entities/core/auth/store/actions/register.actions';
import { RegisterRequestInterface } from 'app/entities/core/auth/types/register-request.interface';
import { errorSelector, isSubmittingSelector } from 'app/entities/core/auth/store/selectors';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  errorMsg$!: Observable<string>;
  submitted = false;

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
      fullName: ['', Validators.required],
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

    const request: RegisterRequestInterface = this.form.value;

    this.store.dispatch(registerAction({ request }));
  }
}
