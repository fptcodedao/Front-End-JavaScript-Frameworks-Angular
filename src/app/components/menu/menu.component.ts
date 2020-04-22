import { dataDish } from './../../shared/dishStore';
import { Dish } from './../../shared/dish';
import { Component, OnInit } from '@angular/core';
import { DishService } from './../../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Array<Dish>;
  selectedDish: Dish;
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  constructor(
    private dishService: DishService
  ) {
    this.dishes = this.dishService.getDishes();
    this.selectedDish = dataDish[0];
  }

  ngOnInit(): void { }
}
