import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../types/appointment';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  @Input() appointment: Appointment;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit() {
    this.getAppointmentsById();
  }

  getAppointmentsById() : void {
    const Id = +this.route.snapshot.paramMap.get('Id');
    this.appointmentService.getAppointmentsById(Id, "slee559@aucklanduni.ac.nz")
    .subscribe(
        resultArray => this.appointment = resultArray,
        error => console.log("Error :: " + error)
    )
  }

  goBack(): void {
    this.location.back();
  }

  save() : void{
    console.log(this.appointment.Party);
    this.appointmentService.putAppointment(this.appointment)
    .subscribe(() => this.goBack());
  }
}
