import { dataDish } from './../../shared/dishStore';
import { Dish } from './../../shared/dish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  constructor() {
    this.dish = dataDish[0];
  }

  ngOnInit(): void {}
}
