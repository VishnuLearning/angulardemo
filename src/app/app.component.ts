import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable, Subscription } from 'rxjs';
import { Topping } from './models/topping';
import { FlickrPhoto } from './models/flickr-photo';
import { take } from 'rxjs/operators';

@Component({
  selector: 'foo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
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
