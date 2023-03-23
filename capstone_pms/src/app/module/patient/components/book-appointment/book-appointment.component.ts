import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../patient.service';

interface Doctor {
  value: string;
  viewValue: string;
}
export class CalenderUser{
  date:any;
  reason:any;
  physicianEmail:any;
  submissionDate:any;
}
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent  implements OnInit {
  tittle = 'datePicker';
  calenderUser:CalenderUser=new CalenderUser();
  getDate: any;
  Date1:Date =new Date();
  constructor(private patientService: PatientService,
    private router:Router,
    private datePipe: DatePipe){}



  ngOnInit(){
    this.getDateTime();

  }
  

  minDate:any ="";
  getDateTime(){
    var date:any = new Date();
    var toDate:any =date.getDate();
    if(toDate < 10){
      toDate = '0' + toDate;
    }
    var month:any = date.getMonth() +1;
    if(month <10){
      month = '0' + month;
    }
    var year = date.getFullYear();
    this.minDate = year+ "-" + month +"-" + toDate;
    console.log(this.minDate);

  }
  
  selectedMatDate!:Date;

   doctors: Doctor[] = [
    {value: 'doctor-1', viewValue: 'Dr. Ashish Sabharwal'},
    {value: 'doctor-2', viewValue: 'Dr. Surbhi Anand'},
    {value: 'doctor-3', viewValue: 'Dr. Sanjay Sachdeva'},
    {value: 'doctor-4', viewValue: 'Dr. Aditya Gupta'},
  ];
getDoctor:any;
  // getAvailDoctor(){
  //   this.calenderService.getAvailDoctor().subscribe((respone: any)=>{
  //     this.getDoctor=respone;
  //     console.log(this.getDoctor);

  //   })
  // }


  saveUser(){
    this.patientService.addAppointment(this.calenderUser).subscribe((data: any)=>{
      console.log(data);
            // this.goToUserList();
    },
      (    error: any) => console.log(error)); 
    

 }
//  goToUserList(){
//   this.router.navigate(['/patient/register']);
// }
onSubmit(){
  this.calenderUser.submissionDate=this.datePipe.transform(this.Date1,"dd-MM-yyyy");
  this.calenderUser.date=this.datePipe.transform(this.calenderUser.date,"dd-MM-yyyy");
  console.log(this.calenderUser);
  this.saveUser();
}
}


