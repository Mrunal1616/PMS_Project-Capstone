import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../../patient.service';

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
export class ViewprescriptionComponent implements OnInit{

  constructor(private patientService :PatientService
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
      this.patientService.getAllPrescription(1).subscribe(
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
