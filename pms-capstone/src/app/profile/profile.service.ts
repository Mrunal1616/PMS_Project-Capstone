import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  

  constructor(private httpClient : HttpClient) { }

  public getPatientbyId(patientId : number) {
    return this.httpClient.get("http://localhost:8089/patient/"+patientId);
  }

  
}
