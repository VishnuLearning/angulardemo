import { Component, OnInit } from '@angular/core';
import { Topping } from 'src/app/models/topping';
import { Observable } from 'rxjs';
import { FlickrPhoto } from 'src/app/models/flickr-photo';
import { DataService } from 'src/app/services/data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  toppings: Topping[];
  images: Observable<FlickrPhoto[]>;
  selected: Array<Topping> = [];
  place: string;
  ingredient: Topping;

  constructor(private dataService:DataService) {

  }

  add() {
    //TODO: remove ingredient from toppings list
    this.toppings.splice(this.toppings.indexOf(this.ingredient), 1);
    if(this.ingredient) this.selected.push(this.ingredient);
  }

  remove(t:Topping) {
    this.toppings.push(t);
    this.selected.splice(this.selected.indexOf(t), 1);
  }
  
  ngOnInit(): void {
    this.dataService.get_toppings().pipe(take(1)).subscribe( d => {
      this.toppings = d;
    })
    //this.toppings = this.dataService.get_toppings();
   
  }

  updateImages() {
    this.images = this.dataService.get_flickr_photolist(this.place);
  }

}
