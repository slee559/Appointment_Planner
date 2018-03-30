import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentService } from './services/appointment.service';
import { UserService } from './services/user.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { BaseService } from './services/base.service';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    HttpModule, 
    AppRoutingModule
  ],
  providers: [
    BaseService,
    AppointmentService, 
    UserService, 
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
