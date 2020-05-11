import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,

    ButtonModule,
    CalendarModule,
    InputTextModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    InputTextModule
  ]
})
export class HomeModule { }
