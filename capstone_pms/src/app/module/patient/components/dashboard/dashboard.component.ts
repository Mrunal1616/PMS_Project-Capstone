import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public dialog : MatDialog){}

  openDialog(){
    this.dialog.open(BookAppointmentComponent);
  }


}
