import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Vegetable Salad', 'Mix Vegetble Salad, Perfect for Healthy Breakfast',
            'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxOS1qYWt1YmstMDgyMS1wYWxlby1icmVha2Zhc3QzLmpwZw.jpg?s=rTT3PeFnfont5Oq7MVQpVTpRDdkiTFqvAVG30Kkz3q4',
            [
                new Ingredient('Cucumber', 2),
                new Ingredient('Carrot', 1),
                new Ingredient('Tomato', 1),
                new Ingredient('Eggs', 1)
            ]),
        new Recipe('Aloo Paratha', 'Great and Wholesome breakfast',
            'https://live.staticflickr.com/1548/24330115331_f731b72a75_b.jpg',
            [
                new Ingredient('Potato', 3),
                new Ingredient('Wheat Flour', 1)
            ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}