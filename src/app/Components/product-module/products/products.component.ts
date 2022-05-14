import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { FormsModule } from '@angular/forms';
import { ShoppingCart } from 'src/app/Models/ShoppingCart';
import { ProductService } from 'src/app/Services/ProductService';
import { ShoppingCartService } from 'src/app/Services/ShoppingCartService';
import { UserService } from 'src/app/Services/UserService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product [] = [];
  item :number | undefined;
  user:any;
  constructor(private route:ActivatedRoute,private router :Router,
    private UserService:UserService, private productservices: ProductService,private shoppingcartservices:ShoppingCartService) {
  }

  ngOnInit(): void {
    console.log("Doaa");
    this.productservices.GetAllProducts().subscribe(data => {
      this.products = data
      console.log(this.products);
    });
  }


  AddItemToCart(productId:number){
  this.shoppingcartservices.addItemToCart(this.user.id,productId,null).subscribe();
  location.reload();
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:40899/${serverPath}`;
  }
  counter(i: number) {
    return new Array(i);
  }
}