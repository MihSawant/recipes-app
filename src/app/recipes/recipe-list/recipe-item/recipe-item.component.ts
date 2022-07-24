import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {



  @Input() recipe: Recipe;

  constructor(private reicpeService: RecipeService) { }

  ngOnInit(): void {
  }

  recipeClicked() {
    this.reicpeService.recipeSelected.emit(this.recipe);
  }

}
