import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalenderUser } from './components/book-appointment/book-appointment.component';
import { Login } from './components/login/login.component';
import { TestList, VisitId } from './components/observations/observations.component';
import { AppointmentList } from './components/previous-appointemt/previous-appointemt.component';
import { User } from './components/register/register.component';
import { PrescriptionList } from './components/viewprescription/viewprescription.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }

  public addUser(user : User)  : Observable<Object>{
    
    return this.httpClient.post(`http://localhost:8085/patient/register`, user);
  }

  public loginUserFromRemote(login :Login) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:8085/patient/login", login);
  }

  public getPatientbyId(patientId : number) {
    return this.httpClient.get("http://localhost:8089/patient/"+patientId);
  }

 

  public updateUser(user : User,patientId : number)  : Observable<Object>{
    
    return this.httpClient.post(`http://localhost:8089/patient/${patientId}`, user);
  }


  private url = 'http://localhost:8081/appointments?acceptance=Accepted';

  getAllAppointment():Observable<AppointmentList[]>{
    return this.httpClient.get<AppointmentList[]>(this.url)
  }


  getPeviousAppointment(patientId: number)
  {
    return this.httpClient.get(`http://localhost:8081/appointment/${patientId}/previous`)
  }

  getPeviousAppointmentVisitHistory(appointmentId: number) {
    return this.httpClient.get(`http://localhost:8083/patient/${appointmentId}/health-records`)
  }

  
  getAllTests(visitId: number):Observable<TestList[]> {
    return this.httpClient.get<TestList[]>(`http://localhost:8083/patient/${visitId}/test-records`)
  }

  getAllVisitId(patientId : number):Observable<VisitId[]>{
    return this.httpClient.get<VisitId[]>(`http://localhost:8083/patient/${patientId}/visit-detials`)
  }

  getAllPrescription(visitId: number):Observable<PrescriptionList[]> {
    return this.httpClient.get<PrescriptionList[]>(`http://localhost:8083/patient/${visitId}/prescription`)
  }

  private apiServerUrl="http://localhost:8081/appointment";

  public addAppointment(calenderUser : CalenderUser)  : Observable<Object>{
    return this.httpClient.post(`${this.apiServerUrl}`, calenderUser);
  }

  // getAvailDoctor(){
  //   // return this.http.get('')

  // }

  getAllAppointmentByAcceptance(acceptance:string){
    return this.httpClient.get('http://localhost:8081/appointments'+'?'+acceptance);
    
  }
  getAppointmentByPatient(patientId:number):Observable<any>
  {
  return this.httpClient.get(`http://localhost:8081/patient/${patientId}/appointments`)
  }

}
