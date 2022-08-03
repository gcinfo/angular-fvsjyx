//import { Component, OnInit } from '@angular/core';
//import { Component, Input } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { EventEmitter } from 'node:stream';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent /*implements OnInit */{

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  //constructor() { }

  // ngOnInit(): void {
  // }

}
