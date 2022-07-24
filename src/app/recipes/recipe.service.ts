import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is just a test desc',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg/800px-10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg?20201125214626'),
        new Recipe('A Test Two Recipe', 'This is just a test desc for Two',
            'https://static.toiimg.com/photo/53096885.cms')
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}