import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';
import { Observable } from 'rxjs';
import { User } from '../register/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl = "http://localhost:8085/patient/login";

 

  constructor(private httpClient : HttpClient) { }

  public loginUserFromRemote(login :Login) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8085/patient/login", login);
  }



}
