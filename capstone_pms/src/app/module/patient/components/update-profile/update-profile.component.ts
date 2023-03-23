import { Component } from '@angular/core';
import { PatientService } from '../../patient.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {
  user : User = new User();
  constructor(private  patientService : PatientService,
    ){
 
   }
   ngOnInit(): void {
     this.getPatientbyId();
       
   }
 
   patientbyIdData: any;
  getPatientbyId(){
     this.patientService.getPatientbyId(1).subscribe(response=>{
       this.patientbyIdData=response;
       console.log(this.patientbyIdData);
     })
   }

  
  update(user: any){
    // this.updateUser = user;
    
  }


}
