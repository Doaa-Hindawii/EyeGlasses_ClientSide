import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'any'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  BaseURL= 'http://localhost:40899/api/Product';

  GetAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BaseURL);
  }

  getProductById(ID: any): Observable<any> {
    return this.http.get(`${this.BaseURL}/${ID}`);
    }
}