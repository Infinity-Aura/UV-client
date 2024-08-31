import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { ProfileRoutes } from "./profile.routing";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "app/shared/shared-material.module";
import { SharedComponentsModule } from "app/shared/components/shared-components.module";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedComponentsModule,
    RouterModule.forChild(ProfileRoutes),
  ],
})
export class ProfileModule {}
