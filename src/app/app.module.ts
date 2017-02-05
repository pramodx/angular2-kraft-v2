import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";

@NgModule({
	imports:      [ BrowserModule,
		//AngularFireModule.initializeApp(firebaseConfig, authConfig),
		//RouterModule.forRoot(routerConfig),
		ReactiveFormsModule,
		HttpModule ],
	declarations: [ AppComponent, ProductsDashboardComponent ],
	providers: [],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
