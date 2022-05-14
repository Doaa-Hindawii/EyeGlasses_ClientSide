import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductModuleModule } from './Components/product-module/product-module.module';

const routes: Routes = [
  // Default path
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'', redirectTo:'/Home', pathMatch:'full'},
      {path:'Home', component:HomeComponent},
      {path: 'products',
      loadChildren: () =>
        import('./Components/product-module/product-module.module').then((m) => m.ProductModuleModule),
    },     
      { path: 'Order', component: OrderComponent },
      { path: 'ShoppingCart', component: ShoppingCartComponent },
    ]
  },
  {path: 'Register', component: RegisterComponent},
  {  path: 'Login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
