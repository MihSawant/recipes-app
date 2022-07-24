import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping.list.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  recipeIngredients: Ingredient[] = [];

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit(): void {

  }

  getRecipeIngredients() {
    this.recipeIngredients = this.recipe.ingredients;
    this.shopListService.addIngredients(this.recipeIngredients);
  }

}
