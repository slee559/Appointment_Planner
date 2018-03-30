import { Component, OnInit } from '@angular/core';
import { Appointment } from '../types/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments : Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.getAllAppointments("slee559@aucklanduni.ac.nz");
  }

  getAllAppointments(providerEmail : string) : void {
    this.appointmentService.getAllAppointments(providerEmail)
    .subscribe(
        resultArray => this.appointments = resultArray,
        error => console.log("Error :: " + error)
    );
  }
}
