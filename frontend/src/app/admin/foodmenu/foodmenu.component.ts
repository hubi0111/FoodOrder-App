import { Component, OnInit } from '@angular/core';
import { FoodMenu } from '../../model/FoodMenu';
import { MenuService } from '../../service/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodMenuComponent implements OnInit {

  foodmenu: Array<FoodMenu>;
  foodRecieved: Array<FoodMenu>;
  selectedFood: FoodMenu | any;
  action: string;

  constructor(private httpClientService: MenuService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getFoodMenu().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const id = params['id'];
        if (id) {
          this.selectedFood = this.foodmenu.find(food => {
            return food.id === +id;
          });
        }
      }
    );
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

  addFood() {
    this.selectedFood = new FoodMenu();
    this.router.navigate(['admin', 'menu'], { queryParams: { action: 'add' } });
  }

  viewFood(id: number) {
    this.router.navigate(['admin', 'menu'], { queryParams: { id, action: 'view' } });
  }
}