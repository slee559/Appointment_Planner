import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../types/user';
import { BaseService } from './base.service';
import {Http, Response} from "@angular/http";
 import "rxjs/Rx";

@Injectable()
export class UserService extends BaseService{

    _userURL = "api/User";


    constructor(private http : Http) {
        super();
    }
    getAllUsers(providerEmail : string) : Observable<User[]> {
        const url = `${this._baseURL + this._userURL}?providerEmail=${providerEmail}`;
        return this.http
            .get(url)
            .map((response: Response) => {
                return <User[]>response.json();
            })
            .catch(this.handleError);  
    }

    getUser(id : number, providerEmail : string) : Observable<User>{
        const url = `${this._baseURL + this._userURL}/${id}?providerEmail=${providerEmail}`;
        return this.http
            .get(url)
            .map((response: Response) => {
                return <User>response.json();
            })
            .catch(this.handleError);  
    }
}