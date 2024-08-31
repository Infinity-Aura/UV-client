import { Routes } from "@angular/router";

import { AppUsersComponent } from "./app-users/app-users.component";

export const OthersRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "users",
        component: AppUsersComponent,
        data: { title: "Users", breadcrumb: "USERS" },
      },
    ],
  },
];
