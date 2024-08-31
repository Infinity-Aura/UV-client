import { Routes } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { HowComponent } from "./how/how.component";

export const HomeRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    data: { title: "Main", breadcrumb: "Main" },
  },
  {
    path: "how",
    component: HowComponent,
    data: { title: "How", breadcrumb: "How" },
  },
];
