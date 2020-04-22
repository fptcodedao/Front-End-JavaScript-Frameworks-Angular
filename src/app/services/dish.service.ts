import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { dataDish } from '../shared/dishStore';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return dataDish;
  }

}
