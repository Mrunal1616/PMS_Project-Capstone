import { DeleteComponent } from './../delete/delete.component';
import { LogoutComponent } from './../logout/logout.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.scss']
})
export class LoginNavbarComponent {

  constructor(public dialog : MatDialog){}


  openLogout(){
    this.dialog.open(LogoutComponent);
  }

  openDelete(){
    this.dialog.open(DeleteComponent);
  }
}
