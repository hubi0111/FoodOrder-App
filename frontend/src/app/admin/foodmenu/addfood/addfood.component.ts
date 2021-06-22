import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FoodMenu } from '../../../model/FoodMenu';
import { MenuService } from '../../../service/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddFoodComponent implements OnInit {

  @Input()
  food: FoodMenu;

  @Output()
  foodAddedEvent = new EventEmitter();

  private selectedFile: any;
  imgURL: any;

  constructor(private httpClientService: MenuService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveFood() {
    if (this.food.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/menu/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addFood(this.food).subscribe(
              (food) => {
                this.foodAddedEvent.emit();
                this.router.navigate(['admin', 'menu']);
              }
            );
          }
        }
        );
    } else {
      this.httpClientService.updateFood(this.food).subscribe(
        (food) => {
          this.foodAddedEvent.emit();
          this.router.navigate(['admin', 'menu']);
        }
      );
    }
  }
}