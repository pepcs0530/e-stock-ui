import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeHistoryComponent } from './cafe-history.component';
import { CafeHistorySaveComponent } from './save/cafe-history-save/cafe-history-save.component';
import { CafeHistorySearchComponent } from './search/cafe-history-search/cafe-history-search.component';

const routes: Routes = [
  {
    path: '',
    component: CafeHistoryComponent,
    children: [
      { path: '', component: CafeHistorySearchComponent },
      { path: 'save', component: CafeHistorySaveComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeHistoryRoutingModule { }
