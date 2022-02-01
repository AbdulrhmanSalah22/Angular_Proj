import { Component } from '@angular/core';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';


  addedProduct : Product[] =[];

  onItemAdd(product : Product){
    const index = this.addedProduct.findIndex(p => p.data[0].name == product.data[0].name)
    console.log(index);

     // if(index >= 0){
     //   this.addedProduct[index].count++
     // }else{
     // this.addedProduct.push(product);}
    // this.addedProduct=product

  }

}
