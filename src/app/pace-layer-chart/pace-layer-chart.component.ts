import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-pace-layer-chart',
  templateUrl: './pace-layer-chart.component.html',
  styleUrls: ['./pace-layer-chart.component.css']
})
@Injectable()
export class PaceLayerChartComponent implements OnInit {
chartdata : any;
  constructor (private httpService: HttpClient) { }

  ngOnInit() {

    this.httpService.get("http://pacelayerapi.azurewebsites.net/masterapi/ApplLayerState")
    .subscribe(
      portfoliodata => {
        
        this.chartdata = portfoliodata[0];//fill data from api to mapdata
        
    });
  }

}
