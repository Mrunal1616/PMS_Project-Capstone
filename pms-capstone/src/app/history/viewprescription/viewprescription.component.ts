import { VisitId } from './../observations/observations.component';
import { HistoryService } from './../history.service';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';

export interface PrescriptionList {
  prescriptionId: number;
  prescriptionName: string;
  dosage: string;
  prescriptionNotes: string;
  visitId: number;
}
const prescriptionData: PrescriptionList[] = [];

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss'],
})
export class ViewprescriptionComponent {
  constructor(private historyService: HistoryService) {}
  
  viewpre = sessionStorage.getItem("view");
  displayedColumns: string[] = [
    'prescriptionId',
    'prescriptionName',
    'dosage',
    'prescriptionNotes',
  ];
  
  
  ngOnInit() {
    this.getPrescriptions();
    console.log("VIEWPRE",this.viewpre,typeof(this.viewpre));
  }


  private _prescriptions: PrescriptionList[] = [];
  public get prescriptions(): PrescriptionList[] {
    return this._prescriptions;
  }
  public set prescriptions(value: PrescriptionList[]) {
    this._prescriptions = value;
  }
  isLoading = false;

  dataSource = new MatTableDataSource<PrescriptionList>();
  ngAfterViewInit(): void {
    //this.getPrescriptions();
    this.dataSource = new MatTableDataSource<PrescriptionList>(
      this.prescriptions
    );
  }
  
  public getPrescriptions(): void {
    
      this.historyService.getAllPrescription(Number(this.viewpre)).subscribe(
        (response: PrescriptionList[]) => {
          this.prescriptions = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  
}
