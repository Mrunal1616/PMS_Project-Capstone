import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  date: number;
  doctor: string;
  attended: string;
  status:string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 11, date: 11/11/2000, doctor: 'mrunal', attended: 'pranit',status:'book'},
  {id: 69, date: 11/2/22, doctor: 'sangita', attended: 'rushi',status:'book'},
  {id: 101, date: 11/2/22, doctor: 'eshuu', attended: 'prathamesh',status:'book'},

 
];

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent {
  displayedColumns: string[] = ['id', 'date', 'doctor', 'attended','status'];
  dataSource = ELEMENT_DATA;

}
