import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import {
  AllAppointments,
  AppointmentDetails,
  TestList,
  VisitId,
} from './observations/observations.component';
import { AppointmentList } from './previous-appointment/previous-appointment.component';
import { PrescriptionList } from './viewprescription/viewprescription.component';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private http: HttpClient) {}
  // auto-refresh
  private refresh = new Subject<void>();
  get refreshNeeded() {
    return this.refresh;
  }
  getPatientbyId(patientId: number) {
    return this.http.get(`http://localhost:8089/patient/${patientId}`);
  }

  private url = 'http://localhost:8081/appointments?acceptance=Accepted';

  getAllAppointment(): Observable<AppointmentList[]> {
    return this.http.get<AppointmentList[]>(this.url);
  }

  getPeviousAppointment(patientId: number) {
    return this.http.get(
      `http://localhost:8081/appointment/${patientId}/previous`
    );
  }

  getPeviousAppointmentVisitHistory(appointmentId: number) {
    return this.http.get(
      `http://localhost:8083/patient/${appointmentId}/health-records`
    );
  }

  getAllTests(visitId: number): Observable<TestList[]> {
    return (
      this.http
        .get<TestList[]>(
          `http://localhost:8083/patient/${visitId}/test-records`
        )
        //auto-refresh
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        )
    );
  }

  getAllVisitId(patientId: number): Observable<VisitId[]> {
    return this.http
      .get<VisitId[]>(
        `http://localhost:8083/patient/${patientId}/visit-detials`
      )
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  getAllPrescription(visitId: number): Observable<PrescriptionList[]> {
    return this.http.get<PrescriptionList[]>(
      `http://localhost:8083/patient/${visitId}/prescription`
    );
  }

  getAllAppointments(patientId: number): Observable<AllAppointments[]> {
    return this.http.get<AllAppointments[]>(
      `http://localhost:8081/patient/${patientId}/allappointments`
    );
  }

  getAppointmentDetails(
    appointmentId: number
  ): Observable<AppointmentDetails[]> {
    return this.http.get<AppointmentDetails[]>(
      `http://localhost:8081/appointments/${appointmentId}`
    );
  }
}
