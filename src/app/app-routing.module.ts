import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: 'dashboard', loadChildren: './home/dashboard/dashboard.module#DashboardModule'},
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
