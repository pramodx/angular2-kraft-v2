import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {AngularFire} from "angularfire2/angularfire2";
import {Router} from "@angular/router";
@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
	loginForm: FormGroup;
	
	constructor(
		private _formBuilder: FormBuilder,
	    private _af: AngularFire,
	    private _router: Router
	){}
	
	ngOnInit(){
		let fbEmail = '';
		let fbPassword = '';
		
		this.loginForm = this._formBuilder.group({
			email: [fbEmail, Validators.compose([Validators.required, email])],
			password: [fbPassword, Validators.required]
		})
	}
	
	onSubmit(){
		if(this.loginForm.valid) {
			//let ctrls = this.loginForm.controls;
			//console.log(this.loginForm.value.email);
			this._af.auth.login({email: this.loginForm.value.email, password: this.loginForm.value.password})
				.then(
					success => {
						console.log(success);
						localStorage.setItem('authToken', success.uid);
						this._router.navigate(['/products'])
						
					},
					error => {
						console.log(error);
						localStorage.removeItem('authToken');
					}
				);
			// return false;
		}
	}
	
	logOut(){
		localStorage.removeItem('authToken');
		this._router.navigate(['/products'])
	}
}
function email(control: FormControl):{[s:string]:boolean}{
	if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
		
		return { 'invalidEmailAddress': true };
	}
}