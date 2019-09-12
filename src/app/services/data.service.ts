import { Injectable } from '@angular/core';
import { Topping } from '../models/topping';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get_toppings():Observable<Topping[]> {
    console.log("In Data Service");
    return this.http.get<Topping[]>(
      'assets/data/toppings.json').pipe(
      map(a => a.map(t=>{return new Topping(t.name, t.imageurl, t.cost)})
      )
    );
  }
}
