import { Injectable } from '@angular/core';
import { Topping } from '../models/topping';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get_toppings():Observable<Topping[]> {
    console.log("In Data Service");
    return this.http.get<Topping[]>('assets/data/toppings.json');
  }
}
