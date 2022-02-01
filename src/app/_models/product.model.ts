import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface Product{
    _id?:number,
    data:ProductLang[],
    price:number,
    discount?:number,  //optional
    counter:number,
    imagesUrls:string,
    category:Category,
    paymentType:PaymentType [],
    tags:Tag []
    
}