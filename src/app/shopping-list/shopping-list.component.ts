import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Spinach', 5),
    new Ingredient('Lemon', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredientToList(ingredient: Ingredient) {
    if (ingredient.amount > 0) {
      this.ingredients.push(ingredient);
    } else {
      alert('Amount should be At Least 1');

    }
  }

}
