import {Component} from "@angular/core";
import {ProductsComponent} from "../products/products.component";
import {ProductDetailComponent} from "../product-details/product-detail.component";
import {NutritionComponent} from "../nutrition/nutrition.component";
import {Product} from "../../models/product";
@Component({
	selector: 'products-dashboard',
	templateUrl: './app/components/products-dashboard/products-dashboard.component.html',
	directives: [ProductsComponent, ProductDetailComponent, NutritionComponent]
})
export class ProductsDashboardComponent {

}