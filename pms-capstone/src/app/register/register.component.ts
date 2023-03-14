import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  public registerForm !:FormGroup;
  
  constructor(private fb : FormBuilder){

  }
  ngOnInit(): void {
      this.registerForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        phoneno: ['']
      });
  }

  submit(){
    console.log(this.registerForm.value);
  }

}
