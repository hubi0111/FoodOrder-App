import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';
import { OrderService } from '../service/order.service';
import { FoodMenu } from '../model/FoodMenu';
import { Order } from '../model/Order';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  foodmenu: Array<FoodMenu>;
  foodRecieved: Array<FoodMenu>;

  cart: any;

  constructor(private router: Router, private menuService: MenuService, private orderService: OrderService) { }


  ngOnInit() {
    this.menuService.getFoodMenu().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cart = JSON.parse(data);
    } else {
      this.cart = [];
    }
  }

  handleSuccessfulResponse(response: FoodMenu[]) {
    this.foodmenu = new Array<FoodMenu>();
    this.foodRecieved = response;
    for (const f of this.foodRecieved) {

      const food = new FoodMenu();
      food.id = f.id;
      food.name = f.name;
      food.retrievedImage = 'data:image/jpeg;base64,' + f.picByte;
      food.price = f.price;
      food.picByte = f.picByte;
      this.foodmenu.push(food);
    }
  }

  addToCart(foodId: string | number) {
    let food: any = this.foodmenu.find(f => {
      return f.id === +foodId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(food);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  updateCartData(cartData: any) {
    this.cart = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  checkout() {
    let items = [];
    let price: number = 0;
    for (let item of this.cart) {
      items.push(item.name);
      price += +item.price;
    }
    let retCart = new Order();
    retCart.name = JSON.parse(localStorage.getItem('userData')!).name;
    retCart.items = items;
    retCart.price = price;
    this.orderService.makeOrder(retCart).subscribe();
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}