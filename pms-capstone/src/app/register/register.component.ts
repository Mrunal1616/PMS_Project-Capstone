import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  user: User = new User();
  constructor(private registerService: RegisterService,
    private router :Router){}

  ngOnInit(): void { }

  saveUser(){
    this.registerService.addUser(this.user).subscribe(data =>{
      console.log(data);
      // this.goToUserList();
    },
    error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/patient/register']);
  }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
  hide=true;
}
