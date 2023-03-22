import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = new Login();
  msg = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.loginService.loginUserFromRemote(this.login).subscribe(
      (data) => {
        if (data != null) {
          console.log(data.patientId);
          sessionStorage.setItem('patientid', data.patientId);
          console.log('response recieved');

          this.router.navigate(['/navbar/' + data.patientId]);
        }
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Please enter valid email & password';
      }
    );
  }

  hide = true;
}
