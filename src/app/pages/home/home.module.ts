import { SharedMaterialModule } from "app/shared/shared-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";
import { HomeRoutes } from "./home.routing";
import { MainComponent } from "./main/main.component";
import { HowComponent } from "./how/how.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedModule,
    FlexLayoutModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SharedPipesModule,
    RouterModule.forChild(HomeRoutes),
  ],
  declarations: [MainComponent, HowComponent],
  exports: [],
})
export class HomeModule {}
