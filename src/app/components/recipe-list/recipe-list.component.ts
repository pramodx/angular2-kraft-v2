import {Component, OnInit} from "@angular/core";
// import {ROUTER_DIRECTIVES} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Recipe} from "../../models/recipe";
@Component({
	selector: 'recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[];
	items: Observable<any[]>;
	isLoggedIn: boolean = false;
	
	constructor(private af: AngularFire) {
		this.items = af.database.list('/data', {preserveSnapshot: true});
		this.items
			.subscribe(snapshots => {
				this.recipes = [];
				snapshots.forEach(snapshot => {
					var obj = snapshot.val();
					obj.uid = snapshot.key;
					this.recipes.push(obj);
				})
			})
	}
	
	ngOnInit(){
		//check if logged in
		if (localStorage.getItem('authToken')) {
			//this.login();
			this.isLoggedIn = true;
		}
	}
	
	
	deleteRecipe(key){
		if (confirm("Are you sure you want to delete this record?")){
			const items = this.af.database.list('/data');
			items.remove(key);
		} else {
			return false;
		}
	}
}
