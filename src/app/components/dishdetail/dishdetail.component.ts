import { Dish } from './../../shared/dish';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('dish') dish: Dish;
  constructor() {
  }

  ngOnInit(): void {}
}
