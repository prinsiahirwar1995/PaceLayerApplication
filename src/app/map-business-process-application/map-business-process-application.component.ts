import { Component, OnInit, Injectable } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable, forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-business-process-application',
  templateUrl: './map-business-process-application.component.html',
  styleUrls: ['./map-business-process-application.component.css']
})
@Injectable()
export class MapBusinessProcessApplicationComponent implements OnInit {
  title = 'PaceLayerUI';
  
  mapData: any;//[];
  BPData: any;//[];
  constructor (private httpService: HttpClient) { }
   ngOnInit () {
//Filling Portfolio data
// let portdata = this.httpService.get("http://pacelayerapplicationapi.azurewebsites.net/masterapi/portfolios");
// let bprocess = this.httpService.get("");
// forkJoin([portdata,bprocess]).subscribe(results => {
//   this.mapData = results[0];
//   this.BPData = results[1];
// })

    this.httpService.get("https://pacelayerapi.azurewebsites.net/masterapi/Portfolio")
      .subscribe(
        portfoliodata => {
          
          this.mapData = portfoliodata[0];//fill data from api to mapdata
          
      });

  //filling Business Process data
  this.httpService.get("https://pacelayerapi.azurewebsites.net/masterapi/BProcess")
  .subscribe(
    bpdata => {
      
      this.BPData = bpdata[0];//fill data from api to mapdata
      
  });

  }

} 