import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() linkClickEvent = new EventEmitter<string>();
  click = '';

  constructor() { }

  ngOnInit(): void {
  }

  recipesClicked(){
    this.click = 'Recipes';
    this.linkClickEvent.emit(this.click);
  }

  shoppingListClicked(){
    this.click = 'ShoppingList';
    this.linkClickEvent.emit(this.click);
  }

}
