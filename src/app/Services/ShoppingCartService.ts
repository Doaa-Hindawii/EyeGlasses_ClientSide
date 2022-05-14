import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  url_cart='https://localhost:40899/api/Cart';
  ngOnInit() {          
  }

  getUserCartItems(userId:string):Observable<any> {​​​
    let url=`${this.url_cart}/${userId}`;
    return this.http.get(url);
  }
  addItemToCart(userId:string,productId:number,data: any):Observable<any> {​​​
    let url=`${this.url_cart}/AddItemToCart/${userId}/${productId}`;
    return this.http.post(url,data);
  }
  deleteItemFromCart(userId:string ,productId:number):Observable<any> {
    let url=`${this.url_cart}/DeleteProduct/${userId}/${productId}`;
    return this.http.delete(url);
  }
  increaseCartItemQuantity(userId:string ,productId:number,cartItem: any):Observable<any>{
    let url=`${this.url_cart}/IncreaseCartItem/${userId}/${productId}`;
    return this.http.put(url,cartItem);
  }
  decreaseCartItemQuantity(userId:string ,productId:number,cartItem: any):Observable<any>{
    let url=`${this.url_cart}/DecreaseCartItem/${userId}/${productId}`;
    return this.http.put(url,cartItem);
  }
  getCartItemByUserId(userId:string ,productId:number):Observable<any>{
    let url=`${this.url_cart}/GetCartItem/${userId}/${productId}`;
    return this.http.get(url);
  }
  createUserCart(userId:string):Observable<any>{
    let url=`${this.url_cart}/CreateUserCart`;
    return this.http.post(url,userId);
  }
  clearCart(userId:string):Observable<any>{
  let url=`${this.url_cart}/ClearCartItems/${userId}`;
  return this.http.delete(url);
  }


}