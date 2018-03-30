import { NgModule } from '@angular/core';

import { AppointmentsComponent }      from './appointments/appointments.component';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserComponent},
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'detail/:Id', component: AppointmentDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ], 
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }