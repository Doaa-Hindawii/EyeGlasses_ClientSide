import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { FormsModule } from '@angular/forms';
import { ShoppingCart } from 'src/app/Models/ShoppingCart';
import { ProductService } from 'src/app/Services/ProductService';
import { ShoppingCartService } from 'src/app/Services/ShoppingCartService';
import { UserService } from 'src/app/Services/UserService';
import { ShoppingCartItem } from 'src/app/Models/ShoppingCartItem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private UserService:UserService, private router:Router,  private productservices: ProductService,private shoppingcartservices:ShoppingCartService) { }
  
  user:any;
  cartItemList:ShoppingCartItem[]=[];
  productCartList:Product[]=[];

 ngOnInit(): void {
     this.UserService.getIdByUserName(localStorage.getItem('username')).subscribe((
     data =>{
       this.user=data
        this.shoppingcartservices.getUserCartItems(this.user.id).subscribe((
         data=>{
           this.cartItemList=data;
           data.forEach((item: { productId: number; }) => {
             this.productservices.getProductById(item.productId).subscribe((data:any) =>{
               this.productCartList.push(data);
             })
           });
         }
       ))
  }
)) 

   this.productservices.GetAllProducts().subscribe((data:any)=>{
     data.forEach((e: { Price: number; }) => {
      let res=e.Price;
     });
   });
 }

 ClearCart(){ 
  this.shoppingcartservices.clearCart(this.user.id).subscribe();
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(["/ShoppingCart"]);
}

increaseItemQuantity(productId:number){
  this.shoppingcartservices.increaseCartItemQuantity(this.user.id,productId,null).subscribe();
   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(["/ShoppingCart"]);
}

decreaseItemQuantity(productId:number,quantity:number){
  if(quantity>1){
  this.shoppingcartservices.decreaseCartItemQuantity(this.user.id,productId,null).subscribe();}

  else {this.shoppingcartservices.deleteItemFromCart(this.user.id,productId).subscribe();}
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(["/ShoppingCart"]);
}
RemoveItemFromCart(productId:number){
  this.shoppingcartservices.deleteItemFromCart(this.user.id,productId).subscribe();
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(["/ShoppingCart"]);
}
getProductName(idx: number ){
  return this.productCartList[idx].name;
}
getProductPathImg(idx: number){
  return this.productCartList[idx].imagePath;
}
GoToCheckOut(){
  if(this.cartItemList.length>0)
    {
      this.router.navigate(["/Order"])
      window.scrollTo(0,0)
    }
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:40899/${serverPath}`;
}

}