import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test desc', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg/800px-10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg?20201125214626'),
    new Recipe('A Test Two Recipe', 'This is just a test desc for Two', 
    'https://static.toiimg.com/photo/53096885.cms')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
