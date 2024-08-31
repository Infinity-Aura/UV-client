import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GetAllEffect } from "./store/effects/get-all.effect";
import { RadiometerService } from "./services/radiometer.service";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";

@NgModule({
  declarations: [],
  providers: [RadiometerService],
  imports: [
    CommonModule,
    StoreModule.forFeature("radiometer", reducers),
    EffectsModule.forFeature([GetAllEffect]),
    HttpClientModule,
  ],
})
export class RadiometerModule {}
