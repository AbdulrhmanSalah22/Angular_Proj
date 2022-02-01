import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-productlist-container',
  templateUrl: './productlist-container.component.html',
  styleUrls: ['./productlist-container.component.scss']
})
export class ProductlistContainerComponent implements OnInit {

  liItem = [{
    liLable: 'Arts & Crafts',
    className: 'link__icon fas fa-angle-right'
  },
  {
    liLable: 'Automotive',
    className: 'link__icon fas fa-angle-right'
  },
  {
    liLable: 'Baby',
    className: 'link__icon fas fa-angle-right'
  },
  {
    liLable: 'Books',
    className: 'link__icon fas fa-angle-right'
  },
  {
    liLable: 'Eletronics',
    className: 'link__icon fas fa-angle-right'
  },
  {
    liLable: 'Women Fashion',
    className : 'link__icon fas fa-angle-right'
  },
  {
    liLable: 'Men Fashion',
  className : 'link__icon fas fa-angle-right'
}];
@Output()
onItemAddedFromContainer : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }
  onItemAdded(product:Product){
    console.log(product);
    this.onItemAddedFromContainer.emit(product);
  }
}
