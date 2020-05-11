import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeHistoryRoutingModule } from './cafe-history-routing.module';
import { CafeHistoryComponent } from './cafe-history.component';
import { HomeModule } from '../home.module';

@NgModule({
  declarations: [CafeHistoryComponent],
  imports: [
    CommonModule,
    CafeHistoryRoutingModule,

    HomeModule
  ]
})
export class CafeHistoryModule { }
