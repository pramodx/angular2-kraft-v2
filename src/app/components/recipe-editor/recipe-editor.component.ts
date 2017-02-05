import {Component, OnInit} from "@angular/core";
import {DataService} from "../../services/data.service";
import 'rxjs/Rx';
import {AngularFire} from "angularfire2";
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Recipe} from "../../models/recipe";
// import has = Reflect.has;

@Component({
	selector: 'recipe-editor',
	templateUrl: './recipe-editor.component.html',
	styleUrls: ['./recipe-editor.component.scss'],
	providers: [DataService, ProductsService]
})
export class RecipeEditorComponent implements OnInit {
	recipeEditForm: FormGroup;
	private _mode = 'Add';
	recipeIndex: string;
	response: string;
	isLoggedIn: boolean;
	products: Product[];
	sub: any;
	recipe: Recipe
	
	constructor(
		public af: AngularFire,
		private _productsService: ProductsService,
	    private _router: Router,
	    private _route: ActivatedRoute,
	    private _formBuilder: FormBuilder
	){}
	
	ngOnInit(){
		
		//check if logged in
		if (!localStorage.getItem('authToken')) {
			//this.login();
			this._router.navigate(['/admin']);
		}
		
		//get list of all products
		this._productsService.getAllProducts().then((products) => this.products = products);
		
		this.sub = this._route.params.subscribe(params => {
			this.recipeIndex = params['id'];
			if (this.recipeIndex) {
				this._mode = 'Edit'
			}
			
		});
		
		
		let fbName = '';
		let fbProduct = null;
		let fbNeed = '';
		let fbMaking = '';
		let fbPrepTime = null;
		let fbServes = null;
		
		
		this.af.database.object('/data/' + this.recipeIndex)
			.subscribe(
				response => {
					this.recipe = response;
										
					fbName = this.recipe.name;
					fbProduct = this.recipe.product_id;
					fbNeed = this.recipe.need;
					fbMaking = this.recipe.making;
					fbPrepTime = this.recipe.preptime;
					fbServes = this.recipe.serves;
					
					this.recipeEditForm = this._formBuilder.group({
						name: [fbName, Validators.required],
						product_id: [fbProduct, Validators.required],
						need: [fbNeed, Validators.required],
						making: [fbMaking, Validators.required],
						preptime: [fbPrepTime, Validators.compose([Validators.required, hasNumbers, greaterThanZero])],
						serves: [fbServes, Validators.compose([Validators.required, hasNumbers, greaterThanZero])]
					})
				
				},
				error => {
					console.log(error);
					this._router.navigate(['/recipes']);
				}
			);
			
		
		
		// this.recipeEditForm = this._formBuilder.group({
		// 	name: [fbName, Validators.required],
		// 	product_id: [fbProduct, Validators.required],
		// 	need: [fbNeed, Validators.required],
		// 	making: [fbMaking, Validators.required],
		// 	preptime: [fbPrepTime, Validators.compose([Validators.required, hasNumbers, greaterThanZero])],
		// 	serves: [fbServes, Validators.compose([Validators.required, hasNumbers, greaterThanZero])]
		// })
		
		
	}
		
	onSubmit(
		name: string,
		product_id: string,
		need: string,
		making: string,
		preptime: string,
		serves: string
	){
		const itemObservable = this.af.database.list('/data');
		
		//Add
		if (this._mode == 'Add'){
			itemObservable.push({
				name: name,
				product_id: +product_id,
				need: need,
				making: making,
				preptime: +preptime,
				serves: +serves,
				recipe_image: this.getRecipeImage(name)
			}).then((response) => {
				console.log('successfully added data');
				this._router.navigate(['/recipes/recipe', response.key]);
			});
		}
		
		//EDit
		else if(this._mode == 'Edit'){
			itemObservable.update(this.recipeIndex, {
				name: name,
				product_id: +product_id,
				need: need,
				making: making,
				preptime: +preptime,
				serves: +serves,
				recipe_image: this.getRecipeImage(name)
			}).then(() => {
				console.log('successfully updated data');
				this._router.navigate(['/recipes/recipe', this.recipeIndex]);
			});
		}
		
		
	}
	
	getRecipeImage(name){
		return name.split(" ").join("-").toLowerCase();
	}
	
	// login(){
	// 	this.af.auth.login();
	// 	localStorage.setItem('isLoggedIn', "true")
	// }
	
	goBack(){
		history.back()
	}
}

function hasNumbers(control: FormControl):{[s:string]:boolean}{
	if (!('' + control.value).match('\\d+')) {
		return {noNumbers: true};
	}
}


function greaterThanZero(control: FormControl):{[s:string]:boolean}{
	if (!(control.value > 0)) {
		return {tooSmall: true};
	}
}


