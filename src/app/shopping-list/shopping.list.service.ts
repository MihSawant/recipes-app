import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Spinach', 5),
        new Ingredient('Lemon', 2)
    ];

    ingredientEvent = new EventEmitter<Ingredient[]>();


    getAllIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredientToList(ingredient: Ingredient) {
        if (ingredient.amount > 0) {
            this.ingredients.push(ingredient);
        } else {
            alert('Amount should be At Least 1');
            throw new Error("Amount Should be greater than 0");
        }
        this.ingredientEvent.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientEvent.emit(this.ingredients.slice());
    }
}