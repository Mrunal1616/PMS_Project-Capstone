import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HealthinfoComponent } from './history/healthinfo/healthinfo.component';

const routes: Routes = [
  { path: '', redirectTo: 'patient/register', pathMatch: 'full' },
  { path: 'patient/register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'navbar/:patientId',
    component: LoginNavbarComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'update', component: UpdateProfileComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', component: DashboardComponent },
      { path: 'healthinfo', component: HealthinfoComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
