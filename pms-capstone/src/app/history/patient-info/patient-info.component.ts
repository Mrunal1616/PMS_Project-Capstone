import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent {

  public patientId : number=0;
  constructor(private historyService: HistoryService,private route:ActivatedRoute ) { }
  
  ngOnInit(): void {
  this.getPatientbyId() ;
  console.log(this.route);
  this.route.params.subscribe((param) =>{
   this.patientId=param['patientId'];
    console.log(this.patientId);
  });

  }
  num: any = sessionStorage.getItem('patientid');
  patientbyIdData:any
  getPatientbyId() {
    console.log(this.num);
    this.historyService.getPatientbyId(this.num).subscribe(response => {
      this.patientbyIdData = response;
      console.log(this.patientbyIdData)
    })
  }

}
