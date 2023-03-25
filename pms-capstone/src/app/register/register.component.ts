import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  user: User = new User();
  constructor(private registerService: RegisterService,
    private router :Router,
    private datePipe:DatePipe,
    ){}

  ngOnInit(): void { }

  saveUser(){
    this.registerService.addUser(this.user).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/login']);
    },
    error => console.log(error));
  }
 
  onSubmit(){
    this.user.dob=this.datePipe.transform(this.user.dob,'yyyy-MM-dd');
    console.log(this.user);
    this.saveUser();
  }
hide=true;

}