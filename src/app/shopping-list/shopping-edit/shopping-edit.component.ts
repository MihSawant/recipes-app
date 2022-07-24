import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @Output() ingredientEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;



  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onClickSubmit() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    if (amount < 0) throw new Error("There Should be At-Least 1 Item");
    const ingredient = new Ingredient(name, amount);

    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
    this.shoppingListService.addIngredientToList(ingredient);
  }

}
