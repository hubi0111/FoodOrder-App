import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  makeOrder(cart: any) {
    return this.httpClient.post<Order>('http://localhost:8080/order/add', cart);
  }
}
