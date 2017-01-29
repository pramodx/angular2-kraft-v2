import {Component} from '@angular/core';
import {MainNavComponent} from "./components/mainnav/mainnav.component";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {RecipeEditorComponent} from "./components/recipe-editor/recipe-editor.component";
import {RecipeDetailComponent} from "./components/recipe-detail/recipe-detail.component";


@Component({
	moduleId: module.id,
	selector: 'app-root',
	directives: [ROUTER_DIRECTIVES, MainNavComponent],
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	precompile: [
		ProductsDashboardComponent,
		AdminComponent,
		RecipeListComponent,
		RecipeEditorComponent,
		RecipeDetailComponent
	]
})
export class AppComponent {

}
