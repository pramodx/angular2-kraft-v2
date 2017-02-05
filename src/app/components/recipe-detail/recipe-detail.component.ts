import {Component, OnInit} from "@angular/core";
import {ProductsService} from "../../services/products.service";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {Recipe} from "../../models/recipe";
import { ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/product";

@Component({
	selector: 'recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss'],
	providers: [ProductsService]
})
export class RecipeDetailComponent implements OnInit {
	
	sub: any;
	recipe: FirebaseObjectObservable<any>;
	product: Product;
	productId: number;
	
	constructor(
		private _productsService: ProductsService,
	    private af: AngularFire,
	    private _route: ActivatedRoute,
	    private _router: Router
	){}
	
	ngOnInit(){
		this.sub = this._route.params.subscribe(params => {
			let id = params['id'];
			this.recipe = this.af.database.object('/data/' + id);
			this.recipe
				.subscribe(response => {
					this.productId = response.product_id;
					this.getProduct(this.productId);
				});
			
			
		})
	}
	
	getProduct(id){
		this._productsService.getProduct(id)
			.then(product => this.product = product);
	}
	
	getProductImage(id) {
		return './img/range/img-big-' + this.product.image + '.png';
	}
	
	getImagePath(imgName){
		return './img/recipes/img-small-' + imgName + '.jpg';
	}
		
}