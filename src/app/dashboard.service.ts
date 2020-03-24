import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
// import {DashboardService} from '../dashboard.service' 
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {clsSeries} from './clsSeries'
@Injectable()
export class DashboardService implements OnInit {
  chartdata : any; 
  //objSeries: clsSeries;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  //url = "http://localhost:3000/masterapi/getTimePlot/all/1";
  url = "https://pacelayerapi.azurewebsites.net/masterapi/getTimePlot/all/1";
	constructor(private http:Http) { }
    getBooksWithObservable(): Observable<clsSeries[]> {     
     
           return this.http.get(this.url)
		        .map(this.extractData)
		        .catch(this.handleErrorObservable);
    } 
	private extractData(res: Response) {
      let body = res.json();
      //console.log(body);
        return  body ;
        
    }
    private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
    // private handleErrorPromise (error: Response | any) {
		// console.error(error.message || error);
		// return Promise.reject(error.message || error);
    // }	
 
  bigChart() {
    return this.chartdata;
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
// return [{
//   name: 'Asia',
//   data: [502, 635, 809, 947, 1402, 3634, 5268]
// }, {
//   name: 'Africa',
//   data: [106, 107, 111, 133, 221, 767, 1766]
// }, {
//   name: 'Europe',
//   data: [163, 203, 276, 408, 547, 729, 628]
// }, {
//   name: 'America',
//   data: [18, 31, 54, 156, 339, 818, 1201]
// }, {
//   name: 'Oceania',
//   data: [2, 2, 2, 6, 13, 30, 46]
// }];

 