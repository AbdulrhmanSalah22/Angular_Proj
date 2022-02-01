import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../_models/product.model";
import { CategoryService } from "./category.service";
@Injectable({
    providedIn: 'root'
  })
export class ProductService {
    itemAdded: EventEmitter<Product> = new EventEmitter<Product>();

    cartArray : Product[] = [];

    constructor(private httpClient: HttpClient){
    }

    getAllProducts(): Observable<{product: Product[], numberOfProducts: number}> {
      const token: string = localStorage.getItem('token')!;
      const headers = new HttpHeaders({
        authorization: token
      })
     return this.httpClient.get<{product: Product[], numberOfProducts: number}>(`${environment.baseUrl}product`, {headers})
    }

    getProductById(id: string): Observable<Product> {
      return this.httpClient.get<Product>(environment.baseUrl+'product/'+id)
    }

    addItemToCart(product:Product): Product[] {
      if (!this.cartArray.includes(product)) {
        this.cartArray.push(product);
    }
        const res=this.cartArray;
        // console.log(res);
        return res;
    }
    removeFromCart(i: number) {
      if (this.cartArray[i].counter! > 1) {
          this.cartArray[i].counter!--;
      }
      else {
          this.cartArray.splice(i, 1);
      }
  }
}
