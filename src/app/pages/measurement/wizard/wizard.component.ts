import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { Observable, tap } from "rxjs";

import { activeUserSelector } from "app/entities/core/auth/store/selectors";
import { ActiveUserInterface } from "app/entities/core/auth/types/active-user.interface";
import { saveAction } from "app/entities/measurement/store/actions/save.actions";
import { MeasurementInterface } from "app/entities/measurement/types/measurement.interface";
import { generateAction } from "app/entities/measurement/store/actions/generate.actions";
import { lampModel } from "app/entities/lamp";
import { radiometerModel } from "app/entities/radiometer";
import { lampSelector } from "app/entities/lamp/store/selectors";
import { radiometerSelector } from "app/entities/radiometer/store/selectors";
import { LampInterface } from "app/entities/lamp/types/lamp.interface";
import { RadiometerInterface } from "app/entities/radiometer/types/radiometer.interface";
import { generatedResultSelector, measurementSelector } from "app/entities/measurement/store/selectors";
import { GenerateResultInterface } from "app/entities/measurement/types/generate-result.interface";
import { resetAction } from "app/entities/measurement/store/actions/reset.actions";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.css"],
})
export class WizardComponent implements OnInit {
  activeUserSelector$!: Observable<ActiveUserInterface>;
  measurementSelector$!: Observable<MeasurementInterface>;
  lampSelector$: Observable<LampInterface[]>;
  radiometerSelector$: Observable<RadiometerInterface[]>;
  generatedResultSelector$: Observable<GenerateResultInterface>;
  initialStepFormGroup: FormGroup;
  firstStepFormGroup: FormGroup;
  secondStepFormGroup: FormGroup;
  activeUserId: string;
  generatedStatus: string;
  openModel: boolean = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.initializeValues();
    this.initializeForm();
  }

  initializeValues(): void {
    this.store.dispatch(lampModel.getAllAction());
    this.store.dispatch(radiometerModel.getAllAction());

    this.lampSelector$ = this.store.pipe(select(lampSelector));
    this.radiometerSelector$ = this.store.pipe(select(radiometerSelector));
    this.generatedResultSelector$ = this.store.pipe(
      select(generatedResultSelector)
    );
    this.activeUserSelector$ = this.store.pipe(select(activeUserSelector));
  }

  initializeForm(): void {
    this.initialStepFormGroup = this.formBuilder.group({
      lampId: ['', Validators.required],
      radiometerId: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
    });
    this.firstStepFormGroup = this.formBuilder.group({
      step1_A1: ['', Validators.required],
      step1_B1: ['', Validators.required],
    });
    this.secondStepFormGroup = this.formBuilder.group({
      step2_A1: ['', Validators.required],
      step2_B1: ['', Validators.required],
      step2_C1: ['', Validators.required],
      step2_A2: ['', Validators.required],
      step2_B2: ['', Validators.required],
      step2_C2: ['', Validators.required],
      step2_A3: ['', Validators.required],
      step2_B3: ['', Validators.required],
      step2_C3: ['', Validators.required],
    });
  }

  resetForms() {
    this.initialStepFormGroup.reset();
    this.firstStepFormGroup.reset();
    this.secondStepFormGroup.reset();

    this.store.dispatch(resetAction());
  }

  generate() {
    if (
      this.initialStepFormGroup.invalid ||
      this.firstStepFormGroup.invalid ||
      this.secondStepFormGroup.invalid
    ) {
      return;
    }

    const request: Partial<MeasurementInterface> = {
      ...this.initialStepFormGroup.value,
      steps: {
        step1: this.firstStepFormGroup.value,
        step2: this.secondStepFormGroup.value,
      },
    };

    this.store.dispatch(generateAction({ request }));

    this.openModel = true;
  }

  saveLocally() {
    if (
      this.initialStepFormGroup.invalid ||
      this.firstStepFormGroup.invalid ||
      this.firstStepFormGroup.invalid
    ) {
      return;
    }

    const request: MeasurementInterface = {
      ownerId: this.activeUserId,
      ...this.initialStepFormGroup.value,
      steps: {
        step1: this.firstStepFormGroup.value,
        step2: this.secondStepFormGroup.value,
      },
    };

    console.log(request);
  }

  saveRemotely() {
    this.measurementSelector$ = this.store.pipe(select(measurementSelector));

    this.activeUserSelector$.subscribe((user) => (this.activeUserId = user.id));
    this.measurementSelector$.subscribe((measurement) => (this.generatedStatus = measurement.status));

    if (
      this.initialStepFormGroup.invalid ||
      this.firstStepFormGroup.invalid ||
      this.firstStepFormGroup.invalid
    ) {
      return;
    }

    const request: MeasurementInterface = {
      ownerId: this.activeUserId,
      ...this.initialStepFormGroup.value,
      steps: {
        step1: this.firstStepFormGroup.value,
        step2: this.secondStepFormGroup.value,
      },
      status: this.generatedStatus,
    };

    this.store.dispatch(saveAction({ request }));
  }
}
