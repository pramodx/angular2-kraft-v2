import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {MainNavComponent} from "./components/mainnav/mainnav.component";
import {NutritionComponent} from "./components/nutrition/nutrition.component";
import {ProductDetailComponent} from "./components/product-details/product-detail.component";
import {ProductsComponent} from "./components/products/products.component";
import {RecipeDetailComponent} from "./components/recipe-detail/recipe-detail.component";
import {RecipeEditorComponent} from "./components/recipe-editor/recipe-editor.component";
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {DataService} from "./services/data.service";
import {NutritionService} from "./services/nutrition.service";
import {ProductsService} from "./services/products.service";
import {RouterModule, } from "@angular/router";
import {FilterByPipe} from "./pipes/filter-data.pipe";
import {routes} from "./app.routes";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
	imports:      [ BrowserModule,
		AngularFireModule.initializeApp(
			{
				apiKey: "AIzaSyA0NVNGvwAWrWnzSJg1vGkSbgNr67FW6pk",
				authDomain: "kraft-90cb5.firebaseapp.com",
				databaseURL: "https://kraft-90cb5.firebaseio.com",
				storageBucket: "kraft-90cb5.appspot.com",
    		},{
				provider: AuthProviders.Password,
			    method: AuthMethods.Password
			}),

		ReactiveFormsModule,
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes),
		HttpModule ],
	exports: [],
	declarations: [ AppComponent, ProductsDashboardComponent, AdminComponent, MainNavComponent, NutritionComponent, ProductDetailComponent, ProductsComponent, RecipeDetailComponent, RecipeEditorComponent, RecipeListComponent, FilterByPipe ],
	providers: [DataService, NutritionService, ProductsService, { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
