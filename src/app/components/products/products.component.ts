import {Component, OnInit, Output, OnDestroy, EventEmitter} from "@angular/core";
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
@Component({
	moduleId: module.id,
	selector: 'products',
	styleUrls: ['products.component.scss'],
	templateUrl: 'products.component.html'
})
export class ProductsComponent implements OnInit {
	products:Product[];

	@Output() selectedProduct = new EventEmitter<Product>();

	constructor(
		private _productsService:ProductsService,
		private _router: Router) {
	}

	ngOnInit() {
		this.getAllProducts();
	}

	getAllProducts() {
		this._productsService.getAllProducts().then((products) => this.products = products);
	}

	getImagePath(imgPath) {
		return 'assets/img/range/img-big-' + imgPath + '.png';
	}

	onSelectProduct(product:Product) {
		//this.selectedProduct.emit(product);
		let link = ['/products', product.id];
		this._router.navigate(link)
	}
}
