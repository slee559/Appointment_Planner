import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { UserService } from '../services/user.service';
import { User } from '../types/user';
import { Type } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/Observable';
import { Appointment } from '../types/appointment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];
  allAppointments : Appointment[];
  

  email = "slee559@aucklanduni.ac.nz";
  constructor(private appointmentService : AppointmentService, 
    private userService : UserService) { }

  ngOnInit() {
    this.getAllAppointments("slee559@aucklanduni.ac.nz");
    this.getAllUsers();
  }

  getAllUsers() : void {
    this.userService.getAllUsers(this.email)
    .subscribe(
        resultArray => {
          this.users = resultArray;
        },
        error => console.log("Error :: " + error)
    );
  }

  getAllAppointments(providerEmail : string) : void {
    this.appointmentService.getAllAppointments(providerEmail)
    .subscribe(
        resultArray => this.allAppointments = resultArray,
        error => console.log("Error :: " + error)
    );
  }

  getAppointmentsForUser(userId : number) : void{
    let appointmentsForUser:Appointment[] = [];
   
    for(let i = 0; i < this.allAppointments.length; i++){
      for(let j = 0; j < this.allAppointments[i].Party.length; j++){
        if(this.allAppointments[i].Party[j] == userId){
          appointmentsForUser.push(this.allAppointments[i]);
        }
      }
    }
    
    var doc =(<HTMLSelectElement>document.getElementById(userId+""));
    if(doc.childNodes.length > 3){
      return;
    }
    for(let k = 0; k < appointmentsForUser.length; k++){
      doc.insertAdjacentHTML('beforeend', '<div _ngcontent-c1 class="row justify-content-start">' 
                                        + '<div _ngcontent-c1 class="col-md-4 offset-md-1">'
                                        + '<ul _ngcontent-c1 class="users">'
                                        + '<li _ngcontent-c1>'
                                        + '<a _ngcontent-c1 >'
                                        + '<span _ngcontent-c1 class="badge1">' 
                                        + appointmentsForUser[k].Id 
                                        + '</span>' 
                                        +appointmentsForUser[k].Description
                                        + '</a>'
                                        +'</li>'
                                        +'</ul>'
                                        +'</div>'
                                        +'</div>');
  
    }
    
  }
}
