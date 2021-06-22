import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodMenu } from '../model/FoodMenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) {
  }

  getFoodMenu() {
    return this.httpClient.get<FoodMenu[]>('http://localhost:8080/menu/get');
  }

  addFood(newFood: FoodMenu) {
    return this.httpClient.post<FoodMenu>('http://localhost:8080/menu/add', newFood);
  }

  updateFood(updatedFood: FoodMenu) {
    return this.httpClient.put<FoodMenu>('http://localhost:8080/menu/update', updatedFood);
  }

  deleteFood(id: string | number) {
    return this.httpClient.delete<FoodMenu>('http://localhost:8080/menu/' + id);
  }

}
