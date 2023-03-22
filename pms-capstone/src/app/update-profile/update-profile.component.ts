import { UpdateProfileService } from './update-profile.service';
import { Component } from '@angular/core';
import { User } from '../register/user.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {

  user : User = new User();
  constructor(private  updateProfileService : UpdateProfileService,
    ){
 
   }
   ngOnInit(): void {
     this.getPatientbyId();
       
   }
 
   patientbyIdData: any;
  getPatientbyId(){
     this.updateProfileService.getPatientbyId(1).subscribe(response=>{
       this.patientbyIdData=response;
       console.log(this.patientbyIdData);
     })
   }

  
  update(user: any){
    // this.updateUser = user;
    
  }

}
