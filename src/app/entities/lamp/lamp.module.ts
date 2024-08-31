import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LampService } from './services/lamp.service';
import { GetAllEffect } from './store/effects/get-all.effect';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [],
  providers: [LampService],
  imports: [
    CommonModule,
    StoreModule.forFeature("lamp", reducers),
    EffectsModule.forFeature([GetAllEffect]),
    HttpClientModule,
  ],
})
export class LampModule { }
