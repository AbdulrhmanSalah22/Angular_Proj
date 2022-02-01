import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent implements OnInit {

@Input()
  productItem! : Product;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  onAddedToCartPressed(){
    if (!this.productItem.counter) {
      this.productItem.counter=0;
    }
    this.productItem.counter!+=1;
    this.productService.addItemToCart(this.productItem);
  }
}
