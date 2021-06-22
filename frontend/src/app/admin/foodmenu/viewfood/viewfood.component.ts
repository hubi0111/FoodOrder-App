import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodMenu } from '../../../model/FoodMenu';
import { Router } from '@angular/router';
import { MenuService } from '../../../service/menu.service';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewFoodComponent implements OnInit {

  @Input()
  food: FoodMenu;
  @Output()
  foodDeletedEvent = new EventEmitter();

  constructor(private httpClientService: MenuService, private router: Router
  ) { }

  ngOnInit() {
  }

  deleteFood() {
    this.httpClientService.deleteFood(this.food.id).subscribe(
      (food) => {
        this.foodDeletedEvent.emit();
        this.router.navigate(['admin', 'menu']);
      }
    );
  }

  editFood() {
    this.router.navigate(['admin', 'menu'], { queryParams: { action: 'edit', id: this.food.id } });
  }

}