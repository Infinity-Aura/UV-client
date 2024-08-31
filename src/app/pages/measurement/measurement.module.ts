import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { QuillModule } from "ngx-quill";
import { WizardComponent } from "./wizard/wizard.component";
import { MeasurementRoutes } from "./measurement.routing";
import { TranslateModule } from "@ngx-translate/core";
import { SharedMaterialModule } from "app/shared/shared-material.module";
import { SharedComponentsModule } from "app/shared/components/shared-components.module";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'uk-UA' }
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    TranslateModule,
    SharedComponentsModule,
    QuillModule.forRoot(),
    RouterModule.forChild(MeasurementRoutes),
  ],
  declarations: [WizardComponent],
})
export class MeasurementModule {}
