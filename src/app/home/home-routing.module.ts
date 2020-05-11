import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //{ path: 'dashboard', component: DashboardComponent },
  { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'cafehistory', loadChildren: './cafe-history/cafe-history.module#CafeHistoryModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
