import { Routes } from "@angular/router";

import { TableComponent } from "./table/table.component";

export const ProfileRoutes: Routes = [
  {
    path: "table",
    component: TableComponent,
    data: { title: 'Table', breadcrumb: 'Table'}
  },
];
