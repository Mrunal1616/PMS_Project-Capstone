import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestList, VisitId } from './observations/observations.component';
import { AppointmentList } from './previous-appointment/previous-appointment.component';
import { PrescriptionList } from './viewprescription/viewprescription.component';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }
  getPatientbyId(patientId: number)
  {
    return this.http.get(`http://localhost:8089/patient/${patientId}`)
  }

  private url = 'http://localhost:8081/appointments?acceptance=Accepted';

  getAllAppointment():Observable<AppointmentList[]>{
    return this.http.get<AppointmentList[]>(this.url)
  }


  getPeviousAppointment(patientId: number)
  {
    return this.http.get(`http://localhost:8081/appointment/${patientId}/previous`)
  }

  getPeviousAppointmentVisitHistory(appointmentId: number) {
    return this.http.get(`http://localhost:8083/patient/${appointmentId}/health-records`)
  }

  
  getAllTests(visitId: number):Observable<TestList[]> {
    return this.http.get<TestList[]>(`http://localhost:8083/patient/${visitId}/test-records`)
  }

  getAllVisitId(patientId : number):Observable<VisitId[]>{
    return this.http.get<VisitId[]>(`http://localhost:8083/patient/${patientId}/visit-detials`)
  }

  getAllPrescription(visitId: number):Observable<PrescriptionList[]> {
    return this.http.get<PrescriptionList[]>(`http://localhost:8083/patient/${visitId}/prescription`)
  }
}
