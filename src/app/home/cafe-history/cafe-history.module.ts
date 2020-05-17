import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeHistoryRoutingModule } from './cafe-history-routing.module';
import { CafeHistoryComponent } from './cafe-history.component';
import { HomeModule } from '../home.module';
import { CafeHistorySaveComponent } from './save/cafe-history-save/cafe-history-save.component';
import { CafeHistorySearchComponent } from './search/cafe-history-search/cafe-history-search.component';

@NgModule({
  declarations: [CafeHistoryComponent, CafeHistorySaveComponent, CafeHistorySearchComponent],
  imports: [
    CommonModule,
    CafeHistoryRoutingModule,

    HomeModule
  ]
})
export class CafeHistoryModule { }
