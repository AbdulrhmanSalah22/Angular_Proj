import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductitemComponent } from './product/productitem/productitem.component';
import { ProductlistContainerComponent } from './product/productlist-container/productlist-container.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './info/about-us/about-us.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './info/contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductlistComponent,
    ProductitemComponent,
    ProductlistContainerComponent,
    DropdownComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ProductAddComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
