import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { SaveEffect } from "./store/effects/save.effect";
import { HttpClientModule } from "@angular/common/http";
import { MeasurementService } from "./services/measurement.service";
import { GenerateEffect } from "./store/effects/generate.effect";
import { GetAllEffect } from "./store/effects/get-all.effect";
import { DeleteEffect } from "./store/effects/delete.effect";

@NgModule({
  declarations: [],
  providers: [MeasurementService],
  imports: [
    CommonModule,
    StoreModule.forFeature("measurement", reducers),
    EffectsModule.forFeature([SaveEffect, GenerateEffect, GetAllEffect, DeleteEffect]),
    HttpClientModule,
  ],
})
export class MeasurementModule {}
