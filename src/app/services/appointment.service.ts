import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Appointment } from '../types/appointment';
import { BaseService } from './base.service';
import {Http, Response} from "@angular/http";
 import "rxjs/Rx";

@Injectable()
export class AppointmentService extends BaseService{

    _appURL = "api/Appointment";
    
    constructor(private http : Http) {
        super();
    }

    getAllAppointments(providerEmail : string): Observable<Appointment[]> {
        const url = `${this._baseURL+this._appURL}?providerEmail=${providerEmail}`;
        return this.http
            .get(url)
            .map((response: Response) => {
                return <Appointment[]>response.json();
            })
            .catch(this.handleError);
    }

    getAppointmentsById(id : number, providerEmail : string): Observable<Appointment> {
        const url = `${this._baseURL+this._appURL}/${id}?providerEmail=${providerEmail}`;
        return this.http
        .get(url)
        .map((response: Response) => {
            return <Appointment>response.json();
        })
        .catch(this.handleError);
    }

   
    putAppointment(appointment : Appointment){
        const url = `${this._baseURL+this._appURL}/${appointment.Id}?providerEmail=${appointment.ProviderEmail}`;
        return this.http.put(url,appointment)
        .map((response: Response) => {
            return <Appointment>response.json();
        })
        .catch(this.handleError);
    }
}