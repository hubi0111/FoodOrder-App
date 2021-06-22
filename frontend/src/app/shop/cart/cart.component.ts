import { Component, OnInit } from '@angular/core';
import { GlobalApp } from '../../global';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public app: GlobalApp) { }

  ngOnInit() {
  }

}
