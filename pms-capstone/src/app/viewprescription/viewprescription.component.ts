import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface obervationdata {

  Id: number;
  medicine:string;
  dosage:string;
  notes:string;

}
const Obervation_data: obervationdata[] = [
  {Id: 1, medicine:'Dolo' , dosage:'1-0-1',notes:'after dinner' },
  {Id: 2, medicine:'Dolo' , dosage:'1-0-1',notes:'after dinner' },
  {Id: 3, medicine:'Dolo' , dosage:'1-0-1',notes:'after dinner' },
  {Id: 4, medicine:'Dolo' , dosage:'1-0-1',notes:'after dinner' },
  {Id: 5, medicine:'Dolo' , dosage:'1-0-1',notes:'after dinner' },
  {Id: 6, medicine:'Dolo' , dosage:'1-0-1',notes:'after dinner' },
  

];




@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss']
})
export class ViewprescriptionComponent  {
 
  displayedColumns: string[] = ['Id','medicine','dosage', 'notes'];
  dataSource = Obervation_data;
}
