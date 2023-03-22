import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../history.service';


export interface AppointmentList {
  
  appointmentId: number;
  patientId:number;
  date:string;
  reason:string;
  info:boolean;
  acceptance : string;
  submissionDate:string;
  physicianEmail:string;
  
  
 }

const appointment_data: AppointmentList[] = [];
@Component({
  selector: 'app-previous-appointment',
  templateUrl: './previous-appointment.component.html',
  styleUrls: ['./previous-appointment.component.scss']
})
export class PreviousAppointmentComponent {

  constructor(private historyService:HistoryService ,private route:ActivatedRoute ) { }
  ngOnInit(): void {
    this.getPeviousAppointment();
    this.getPeviousAppointmentVisitHistory();
  }
  
  num: any = sessionStorage.getItem('patientid');
  perviousAppointmentIdData:any
  getPeviousAppointment() {
  
    this.historyService.getPeviousAppointment(this.num).subscribe(response => {
      this.perviousAppointmentIdData = response;
      console.log(response);
      console.log(this.perviousAppointmentIdData.appointmentId);
    })
  }

 
  perviousAppointmentVisitHistory:any
  getPeviousAppointmentVisitHistory() {
    console.log(this.perviousAppointmentIdData.appointmentId);
    this.historyService.getPeviousAppointmentVisitHistory(this.perviousAppointmentIdData.appointmentId).subscribe(response => {
      this.perviousAppointmentVisitHistory = response;
      console.log(response);
    })
  }

}
