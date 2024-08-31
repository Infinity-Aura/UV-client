import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "../shared-material.module";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "app/shared/components/perfect-scrollbar";
import { SearchModule } from "../search/search.module";
import { SharedPipesModule } from "../pipes/shared-pipes.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedDirectivesModule } from "../directives/shared-directives.module";

// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
import { HeaderTopComponent } from "./header-top/header-top.component";
import { SidebarTopComponent } from "./sidebar-top/sidebar-top.component";

// ALWAYS REQUIRED
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { AppComfirmComponent } from "../services/app-confirm/app-confirm.component";
import { AppLoaderComponent } from "../services/app-loader/app-loader.component";
import { ButtonLoadingComponent } from "./button-loading/button-loading.component";
import { MatxExampleViewerComponent } from "./example-viewer/example-viewer.component";
import { MatxExampleViewerTemplateComponent } from "./example-viewer-template/example-viewer-template.component";
import { MatxNotifications2Component } from "./matx-notifications2/matx-notifications2.component";
import { GeneratedViewComponent } from "./generated-view/generated-view.component";
import { ModelRendererComponent } from "./model-renderer/model-renderer.component";

const components = [
  GeneratedViewComponent,
  HeaderTopComponent,
  SidebarTopComponent,
  SidenavComponent,
  NotificationsComponent,
  MainLayoutComponent,
  AuthLayoutComponent,
  BreadcrumbComponent,
  AppComfirmComponent,
  AppLoaderComponent,
  MatxNotifications2Component,
  ModelRendererComponent,
  ButtonLoadingComponent,
  FooterComponent,
  MatxExampleViewerComponent,
  MatxExampleViewerTemplateComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    SharedMaterialModule,
  ],
  declarations: components,
  exports: components,
})
export class SharedComponentsModule {}
