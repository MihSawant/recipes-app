import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayHeader = 'Recipes';
  
  onHeaderLinkClicked(value: string){
    this.displayHeader = value;
    console.log(this.displayHeader);
  }
}
