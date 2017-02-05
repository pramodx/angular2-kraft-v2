import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../../models/product";
import {NutritionService} from "../../services/nutrition.service";
import {Nutrition} from "../../models/nutrition";
import {FilterByPipe} from "../../pipes/filter-data.pipe";
import {NUTRIENTS} from "../../data/nutrients";
import {Nutrient} from "../../models/nutrient";

@Component({
	selector: 'nutrition-data',
	providers: [NutritionService],
	pipes: [FilterByPipe],
	templateUrl: './nutrition.component.html',
	styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent  {
	@Input()
	product: Product;
	nutritions: Nutrition[];
	nutrients: Nutrient[] = NUTRIENTS;

	id: number;

	constructor(private _nutritionService: NutritionService){

	}

	ngOnInit(){

		console.log('inited');
		this.id = this.product.id;
		this._nutritionService.getNutrition().then(data => this.nutritions = data)
	}
}