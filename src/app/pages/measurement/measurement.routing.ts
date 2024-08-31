import { Routes } from "@angular/router";

import { WizardComponent } from "../measurement/wizard/wizard.component";

export const MeasurementRoutes: Routes = [
  {
    path: "",
    component: WizardComponent,
    data: { title: 'Wizard', breadcrumb: 'Wizard'}
  },
];
