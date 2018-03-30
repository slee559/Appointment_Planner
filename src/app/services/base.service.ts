import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Appointment } from '../types/appointment';

export class BaseService {

    protected _baseURL = "http://devtechtest.previewourapp.com/"; 

    constructor() { }
  
    protected handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
  }