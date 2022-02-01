import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  cartIsOpen=false;

 
  constructor(private productService:ProductService) { }
  theAddedProduct!:Product[];
 
  delete(i:number){
    this.productService.removeFromCart(i);
   
    
  }
  ngOnInit(): void {
    this.theAddedProduct=this.productService.cartArray;
  }

}
