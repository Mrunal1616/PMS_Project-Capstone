import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { HealthinfoService } from './healthinfo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-healthinfo',
  templateUrl: './healthinfo.component.html',
  styleUrls: ['./healthinfo.component.scss']
})
export class HealthinfoComponent {
  

}
