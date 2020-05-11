import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeHistoryComponent } from './cafe-history.component';

const routes: Routes = [
  {
    path: '',
    component: CafeHistoryComponent,
    children: [
      { path: '', component: CafeHistoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeHistoryRoutingModule { }
