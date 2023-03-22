import { CalenderComponent } from './../calender/calender.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public dialog : MatDialog){}

  openDialog(){
    this.dialog.open(CalenderComponent);
  }

 

}
