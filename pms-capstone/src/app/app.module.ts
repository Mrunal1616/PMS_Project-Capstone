import { MatModule } from './appModules/mat.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { CalenderComponent } from './calender/calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { DeleteComponent } from './delete/delete.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientInfoComponent } from './history/patient-info/patient-info.component';
import { HealthinfoComponent } from './history/healthinfo/healthinfo.component';
import { PreviousAppointmentComponent } from './history/previous-appointment/previous-appointment.component';
import { ObservationsComponent } from './history/observations/observations.component';
import { ViewprescriptionComponent } from './history/viewprescription/viewprescription.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    LoginNavbarComponent,
    CalenderComponent,
    DashboardComponent,
    UpdateProfileComponent,
    LogoutComponent,
    DeleteComponent,
    ViewprescriptionComponent,
    PatientHistoryComponent,
    LoginComponent,
    HealthinfoComponent,
    RegisterComponent,
    PatientInfoComponent,
    PreviousAppointmentComponent,
    ObservationsComponent
  ],
  entryComponents: [CalenderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
