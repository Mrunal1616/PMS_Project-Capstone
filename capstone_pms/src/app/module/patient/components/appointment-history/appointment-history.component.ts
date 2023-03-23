import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../patient.service';

export interface PeriodicElement{
  appointmentId: number;
  reason: string;
  date: string;
  acceptance: string;
  patientId: number;
  physicianEmail: string;
  submissionDate: string;
}
const ELEMENT_DATA:PeriodicElement[]=[];

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent implements OnInit{
  displayedColumns:string[]=[
  'appointmentId',
  'reason',
  'date',
  'acceptance',
  'patientId',
  'physicianEmail',
  'submissionDate',
  ];
  //dataSource=new MatTableDataSource(ELEMENT_DATA);

constructor(private patientService:PatientService){

  
}
  ngOnInit(){
    this.getAppointmentByPatient();
     this.getAllAppointment();
      }

  getAppointment:any;
  getAllAppointment(){
    this.patientService.getAllAppointmentByAcceptance('acceptance=Pending').subscribe((respone)=>{
      this.getAppointment=respone;
      console.log(this.getAppointment);
    
  })
  
}


getAppointmentPatient:any;
// arr:PeriodicElement[]=[];
getAppointmentByPatient(){
  this.patientService.getAppointmentByPatient(2).subscribe((response)=>{
    this.getAppointmentPatient=response;
    // this.arr[0]=this.getAppointmentPatient.appointmentId;
    // this.arr[1]=this.getAppointmentPatient.reason;
    // this.arr[2]=this.getAppointmentPatient.date;
    // this.arr[3]=this.getAppointmentPatient.acceptance;
    // this.arr[4]=this.getAppointmentPatient.patientId;
    // this.arr[5]=this.getAppointmentPatient.physicianEmail;
    // this.arr[6]=this.getAppointmentPatient.submissionDate;

    console.log('Object gained',this.getAppointmentPatient);
  })
}

}
