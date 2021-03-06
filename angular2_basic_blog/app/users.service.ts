import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private _baseUrl = "http://jsonplaceholder.typicode.com/users/";

    constructor(private _http: Http){}

    getUsers(){
        return this._http.get(this._baseUrl)
            .map(res => res.json());
    }

    addUser(data){
      return this._http.post(this._baseUrl, data)
        .map(res => res.json());
    }

    getUser(id){
      return this._http.get(this._baseUrl + id)
        .map(res => res.json())
    }
}
