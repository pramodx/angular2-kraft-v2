import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http, Headers} from "@angular/http";

@Injectable()
export class DataService {
	firebaseUrl: string;
	
	constructor (private _http: Http){
		this.firebaseUrl = 'https://kraft-90cb5.firebaseio.com/data';
	}
	
	postData(data:any){
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const body = JSON.stringify(data)
		return this._http.post('https://kraft-90cb5.firebaseio.com/data', body, {headers: headers})
			.map(response => response.json())
	}
}