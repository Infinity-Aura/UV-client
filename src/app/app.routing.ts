import { Routes } from "@angular/router";

import { MainLayoutComponent } from "./shared/components/layouts/main-layout/main-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./entities/core/auth/guards/auth.guard";

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./pages/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
        data: { title: "Session" },
      },
    ],
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then(
            (m) => m.HomeModule
          ),
        data: { title: "Home", breadcrumb: "HOME" },
      },
      {
        path: "measurement",
        loadChildren: () =>
          import("./pages/measurement/measurement.module").then(
            (m) => m.MeasurementModule
          ),
        data: { title: "Measurement", breadcrumb: "MEASUREMENT" },
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./pages/profile/profile.module").then((m) => m.ProfileModule),
        canActivate: [AuthGuard],
        data: { title: "Profile", breadcrumb: "PROFILE" },
      },
    ],
  },
  {
    path: "**",
    redirectTo: "sessions/404",
  },
];
