import { dataDish } from './../../shared/dishStore';
import { Dish } from './../../shared/dish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Array<Dish>;
  constructor() {
    this.dishes = dataDish;
  }

  ngOnInit(): void {}
}
