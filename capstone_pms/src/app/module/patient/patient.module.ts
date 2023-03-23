import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { DeleteComponent } from './components/delete/delete.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HealthInfoComponent } from './components/health-info/health-info.component';
import { OutComponent } from './components/out/out.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PreviousAppointemtComponent } from './components/previous-appointemt/previous-appointemt.component';
import { ObservationsComponent } from './components/observations/observations.component';
import { ViewprescriptionComponent } from './components/viewprescription/viewprescription.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { AppointmentHistoryComponent } from './components/appointment-history/appointment-history.component';

const material = [
  MatCardModule,
  FormsModule,
  MatFormFieldModule,
  MatNativeDateModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatToolbarModule,
  MatIconModule,
  MatRadioModule,
  MatMenuModule,
  MatSidenavModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    DefaultComponent,
    DashboardComponent,
    DeleteComponent,
    HealthInfoComponent,
    OutComponent,
    ProfileComponent,
    UpdateProfileComponent,
    PatientInfoComponent,
    PreviousAppointemtComponent,
    ObservationsComponent,
    ViewprescriptionComponent,
    BookAppointmentComponent,
    AppointmentHistoryComponent,
  ],
  imports: [CommonModule, PatientRoutingModule, material],
})
export class PatientModule {}
