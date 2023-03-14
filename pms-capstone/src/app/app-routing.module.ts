import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { HealthinfoComponent } from './healthinfo/healthinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path : '',component: LoginNavbarComponent,
      children :[
        { path : 'profile', component : ProfileComponent},
  { path : 'update', component: UpdateProfileComponent },
  { path : 'logout', component: LogoutComponent},
  { path : 'dashboard', component: DashboardComponent},
  { path : 'healthinfo', component: HealthinfoComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
