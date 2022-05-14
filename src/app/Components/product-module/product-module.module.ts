import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';


 const routes: Routes = [
   // Default path
       {path:'products', component:ProductsComponent} 
 ]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
   CommonModule,RouterModule.forChild(routes)
  ]
})
export class ProductModuleModule { }
