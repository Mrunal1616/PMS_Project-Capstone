import { HealthInfoComponent } from './components/health-info/health-info.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UpdatepatientComponent } from './../physician/components/updatepatient/updatepatient.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'default',
    component: DefaultComponent,
    children: [
      
      {
        path: 'dashboard',
        component : DashboardComponent,
      },
      {
        path: 'healthinfo',
        component: HealthInfoComponent,

      },
      {
        path : 'profile',
        component : ProfileComponent,
      },
      {
        path : 'update',
        component : UpdateProfileComponent,
      }
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
