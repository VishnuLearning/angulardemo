import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topping } from 'src/app/models/topping';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input() topping: Topping;
  @Output() onremove = new EventEmitter<boolean>();

  constructor() { }

  remove() {
    this.onremove.emit(true);
  }
  
  ngOnInit() {
  }

}
