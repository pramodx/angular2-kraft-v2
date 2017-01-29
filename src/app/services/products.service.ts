import {PRODUCTS} from "../data/products";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductsService {

	getAllProducts() {
		return Promise.resolve(PRODUCTS);
	}

	getProduct(id:number){
		return this.getAllProducts()
			.then(products => products.filter(product => product.id === id)[0]);
	}

}
