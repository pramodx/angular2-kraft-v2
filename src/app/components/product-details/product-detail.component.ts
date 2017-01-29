import {Component, OnInit, OnDestroy} from "@angular/core";
import {Product} from "../../models/product";
import {NutritionComponent} from "../nutrition/nutrition.component";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, ROUTER_DIRECTIVES} from "@angular/router";
import {AngularFire, FirebaseListObservable} from "angularfire2/angularfire2";
import {Recipe} from "../../models/recipe";
@Component({
	selector: 'product-detail',
	templateUrl: './app/components/product-details/product-detail.component.html',
	styleUrls: ['./app/components/product-details/product-detail.component.css'],
	directives: [NutritionComponent, ROUTER_DIRECTIVES],
	providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	product:Product;
	sub:any;
	recipes:Recipe[];
	recipesExist: boolean = false;
	
	constructor(private _productService:ProductsService,
	            private _route:ActivatedRoute,
	            private _af:AngularFire) {
		this.recipes = [];
	}
	
	
	ngOnInit():any {
		
		this.sub = this._route.params.subscribe(params => {
			let id = +params['id'];
			this._productService.getProduct(id)
				.then(product => {
					this.product = product;
					//get recipes
					if (product){
						this._af.database.list('/data', {
							query: {
								orderByChild: 'product_id',
								equalTo: id
							}
						}).subscribe(response => {
							this.recipes = response;
						})
					}
					
				});
		});
	}
	
	ngOnDestroy():any {
		this.sub.unsubscribe();
	}
	
	getImagePath(imgPath) {
		return './img/range/img-big-' + imgPath + '.png';
	}
	
	
}
