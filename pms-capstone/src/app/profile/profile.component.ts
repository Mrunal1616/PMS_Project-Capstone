import { LoginService } from './../login/login.service';
import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getPatientbyId();
  }

  num: any = sessionStorage.getItem('patientid');

  patientbyIdData: any;
  getPatientbyId() {
    console.log(this.num);
    this.profileService.getPatientbyId(this.num).subscribe((response) => {
      this.patientbyIdData = response;
      console.log(this.patientbyIdData);
    });
  }
}
