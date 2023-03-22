import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../register/user.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(private httpClient : HttpClient) { }

  public getPatientbyId(patientId : number) {
    return this.httpClient.get(`http://localhost:8089/patient/${patientId}`);
  }

  public updateUser(user : User,patientId : number)  : Observable<Object>{
    
    return this.httpClient.post(`http://localhost:8089/patient/${patientId}`, user);
  }
}
