import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient = inject(HttpClient);

  getProducts(){
    return this.httpClient.get("http://localhost:3000/products");
  }

  constructor() { }
}
