import {Component} from '@angular/core';
import {MainNavComponent} from "./components/mainnav/mainnav.component";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {RecipeEditorComponent} from "./components/recipe-editor/recipe-editor.component";
import {RecipeDetailComponent} from "./components/recipe-detail/recipe-detail.component";


@Component({
	//moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

}
