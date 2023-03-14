import { Component, OnInit } from '@angular/core';

interface Doctor {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  tittle = 'datePicker';

  ngOnInit(){
    this.getDate();

  }

  minDate:any ="";
  getDate(){
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

 }
   