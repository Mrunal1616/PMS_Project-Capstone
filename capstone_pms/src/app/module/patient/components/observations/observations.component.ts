import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../../patient.service';
import { ViewprescriptionComponent } from '../viewprescription/viewprescription.component';

export interface TestList {
  testId: number;
  testName: string;
  result: string;
  testNotes: string;
}
export interface VisitId {
  visitId: number;
}
const visitsData: VisitId[] = [];
const testsData: TestList[] = [];

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss'],
})
export class ObservationsComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  displayedColumns: string[] = ['testId', 'testName', 'result', 'testNotes'];

  arr: string = JSON.parse(sessionStorage.getItem('data') || '{}');

  ngOnInit() {
    this.getVisitId();
    this.getTests();
    this.getPeviousAppointment();
    this.getPeviousAppointmentVisitHistory();
    this.getTests();
  }
  ngAfterViewInit(): void {
    console.log(this.arr);
    for (let mrunal of this.arr) {
      console.log(mrunal);
      // console.log(typeof mrunal);
    }

    this.dataSource = new MatTableDataSource<TestList>(this.tests);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  private _tests: TestList[];
  private _visits: VisitId[] = [];
  public get tests(): TestList[] {
    return this._tests;
  }
  public set tests(value: TestList[]) {
    this._tests = value;
  }
  public get visits(): VisitId[] {
    return this._visits;
  }
  public set visits(value: VisitId[]) {
    this._visits = value;
  }
  isLoading = false;

  dataSource = new MatTableDataSource<TestList>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSizes = [3, 5, 7];
  @ViewChild(MatSort) sort: MatSort;

  num: any = sessionStorage.getItem('patientid');

  public getVisitId(): void {
    console.log(this.num);
    this.patientService.getAllVisitId(this.num).subscribe(
      (reponse: VisitId[]) => {
        this.visits = reponse;
        sessionStorage.setItem('data', JSON.stringify(reponse));
        console.log(this.visits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //mrunal: any;

  public getTests(): void {
    for (let mrunal of this.arr) {
      console.log(Number(mrunal));
      this.patientService.getAllTests(Number(mrunal)).subscribe(
        (response: TestList[]) => {
          this.tests = response;
          console.log(this.tests);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  perviousAppointmentIdData: any;
  getPeviousAppointment() {
    this.patientService
      .getPeviousAppointment(this.num)
      .subscribe((response) => {
        this.perviousAppointmentIdData = response;
        console.log(response);
        console.log(this.perviousAppointmentIdData.appointmentId);
      });
  }
  perviousAppointmentVisitHistory: any;
  getPeviousAppointmentVisitHistory() {
    console.log(this.perviousAppointmentIdData.appointmentId);
    this.patientService
      .getPeviousAppointmentVisitHistory(
        this.perviousAppointmentIdData.appointmentId
      )
      .subscribe((response) => {
        this.perviousAppointmentVisitHistory = response;
        console.log(response);
      });
  }

  openDialog() {
    this.dialog.open(ViewprescriptionComponent);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
