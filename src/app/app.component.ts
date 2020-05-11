import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';

import {QrScannerComponent} from 'angular2-qrscanner';

import Quagga from 'quagga'; // ES6

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  title = 'e-stock';

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {

  }

}
