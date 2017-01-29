
import {Injectable} from "@angular/core";
import {NUTRITION} from "../data/nutrition";

@Injectable()
export class NutritionService {
	getNutrition() {
		return Promise.resolve(NUTRITION)
	}
}