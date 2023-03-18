import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl = "http://localhost:8085/patient/register";

  constructor(private httpClient : HttpClient) { }

  // getUserList() :  Observable<User[]>{
  //   return this.httpClient.get<User[]>(`$(this.apiServerUrl)`);
  // }

  public addUser(user : User)  : Observable<Object>{
    
    return this.httpClient.post(`${this.apiServerUrl}`, user);
  }
}
