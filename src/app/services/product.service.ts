import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  getProducts() {
    return this.http.get<Pizza[]>(
      'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
    );
  }

  getProductById(id:string): Observable<Pizza> {
    return this.http.get<Pizza>(
      `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${id}`
    );
  }
}
