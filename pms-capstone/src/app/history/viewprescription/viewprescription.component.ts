import { HistoryService } from './../history.service';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

export interface PrescriptionList {

  prescriptionId: number;
  prescriptionName:string;
  dosage:string;
  prescriptionNotes:string;
  
  
}
const prescriptionData: PrescriptionList[] = [];




@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss']
})
export class ViewprescriptionComponent  {
 
  constructor(private historyService :HistoryService
    ){}

    
  displayedColumns: string[] = ['prescriptionId','prescriptionName','dosage', 'prescriptionNotes'];
    ngOnInit() {
      this.getPrescriptions();
    }
     private _prescriptions: PrescriptionList[];
    public get prescriptions(): PrescriptionList[] {
      return this._prescriptions;
    }
    public set prescriptions(value: PrescriptionList[]) {
      this._prescriptions = value;
    }
    isLoading = false;
    
    dataSource = new MatTableDataSource<PrescriptionList>();
    ngAfterViewInit(): void {
      this.getPrescriptions();
       this.dataSource=new MatTableDataSource<PrescriptionList>(this.prescriptions);
     
     }

     public getPrescriptions():void{
      this.historyService.getAllPrescription(1).subscribe(
        (response:PrescriptionList[])=>{
          this.prescriptions=response;
          console.log(this.prescriptions);
          
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
        
        )
      
    }
}
