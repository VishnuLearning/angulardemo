import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Topping } from './models/topping';
import { FlickrPhoto } from './models/flickr-photo';

@Component({
  selector: 'foo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toppings: Observable<Topping[]>;
  images: Observable<FlickrPhoto[]>;
  selected: Array<Topping> = [];
  place: string;
  ingredient: Topping;

  constructor(private dataService:DataService) {

  }

  add() {
    if(this.ingredient) this.selected.push(this.ingredient)
  }
  
  ngOnInit(): void {
    // this.dataService.get_toppings().subscribe( d => {
    //   this.toppings = d;
    // })
    this.toppings = this.dataService.get_toppings();
   
  }

  updateImages() {
    this.images = this.dataService.get_flickr_photolist(this.place);
  }

}
