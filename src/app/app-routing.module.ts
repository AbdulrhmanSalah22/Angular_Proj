import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductlistContainerComponent } from './product/productlist-container/productlist-container.component';

const routes: Routes = [
  {path:'home',component:ProductlistContainerComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'product',redirectTo:'/home',pathMatch:'full'},
  {path:'product', children:[
    {path:'details/:productId' , component:ProductDetailsComponent},
    {path:'add', component:ProductAddComponent}
  ]},
  {path:'login', component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us',redirectTo:'/about-us', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
