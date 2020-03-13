
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
import {DashboardService} from '../dashboard.service'
@Component({
  selector: 'app-timeplot',
  templateUrl: './timeplot.component.html',
  styleUrls: ['./timeplot.component.css']
})
export class TimeplotComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};  
chartdata : any[];
// constructor (private httpService: HttpClient) { }

bigChart = []; 
  
constructor(private dashboardService: DashboardService) { }

ngOnInit() {
  this.bigChart = this.dashboardService.bigChart(); 
//}
//   ngOnInit(): void {

   // this.httpService.get("http://localhost:3000/masterapi/getTimePlot/all/0")
   // .subscribe(
   //   portfoliodata => {       
   //     this.chartdata = portfoliodata[0];//fill data from api to mapdata
   //     //console.log(this.chartdata);       
   // });
       this.chartOptions = {
      chart: {
         //animation: true,
         //height: 400,
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         type: 'bubble',
         zoomType: 'xy'
      },
      legend: {
         enabled: true,
         //floating: true,
         //align: 'left',
         //verticalAlign: 'top',
         //y: 60,
         //x: 90
      },
      title: {
         text: 'TIME PLOT'
      },
      subtitle: {
         text: 'Applications VS Time Plot'
      },
      accessibility: {
         point: {
            descriptionFormatter: function (point) {
               var index = point.index + 1,
                  country = point.name,
                  timeOnX = point.x,
                  timeOnY = point.y;

               return index + ', ' + country + ', fat: ' + timeOnX +
                  ', sugar: ' + timeOnY + ', zone: ' + this.series.name + '.';
            }
         }
      },
      xAxis: {
         gridLineWidth: 1,
         startOnTick: true,
         endOnTick: true,
         title: {
            text: 'Business Fit and Value'
         },
         labels: {
            format: '{value}'
         },
         plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 1,
            value: 0,
            label: {
               align: 'right',
               rotation: 0,
               x: -100,
               y: 10,
               style: {
                  fontStyle: 'italic'
               },
               text: 'Tolerate'
            },
            zIndex: 3
         },
         {
            color: 'black',
            dashStyle: 'dot',
            width: 1,
            value: 0,
            label: {
               align: 'left',
               rotation: 0,
               x: 300,
               y: 10,
               style: {
                  fontStyle: 'italic'
               },
               text: 'Invest'
            },
            zIndex: 3
         }],
         accessibility: {
            rangeDescription: 'From Worse to Better'
         }
      },
      yAxis: {
         gridLineWidth: 1,
         startOnTick: true,
         endOnTick: true,
         title: {
            text: 'Operational and Technical Risk'
         },
         labels: {
            format: '{value}'
         },
         maxPadding: 0.2,
         plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 1,
            value: 0,
            label: {
               rotation: 0,
               x: 325,
               y: 100,
               align: 'left',
               style: {
                  fontStyle: 'italic'
               },
               text: 'Eliminate'

            },
            zIndex: 3
         },
         {
            color: 'black',
            dashStyle: 'dot',
            width: 1,
            value: 0,
            label: {
               rotation: 0,
               x: -435,
               y: 100,
               align: 'right',
               style: {
                  fontStyle: 'italic'
               },
               text: 'Migrate'

            },
            zIndex: 3
         }],
         accessibility: {
            rangeDescription: 'Range: Worse to Better'
         }
      },
      tooltip: {
         useHTML: true,
         headerFormat: '<table>',
         pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Time on x-axis:</th><td>{point.x}</td></tr>' +
            '<tr><th>Time on y-axis:</th><td>{point.y}</td></tr>',

         footerFormat: '</table>',
         followPointer: true
      },
      plotOptions: {
         series: {
            dataLabels: {
               enabled: true,
               format: '{point.name}'
            }
         }
      },
      series: [{
         name: 'Tolerate',
         data: [
            { x: -10, y: 23, z: 10, name: 'IM', country: 'IMAGINE' }
         ]
      },
      {
         name: 'Invest',
         data: [
            { x: 22, y: 33, z: 10, name: 'FETA', country: 'FOREIGN EXCHANGE TRADE AUTOMATION' },
            { x: 30, y: 22, z: 10, name: 'FE', country: 'FENERGO' },
            { x: 15, y: 10, z: 10, name: 'FOP', country: 'FRM OPS PORTAL' },
            { x: 22, y: 33, z: 10, name: 'FETA', country: 'FOREIGN EXCHANGE TRADE AUTOMATION' }
         ]
      },
      {
         name: 'Eliminate',
         data: [
            { x: -10.3, y: -45, z: 10, name: 'MW', country: 'MARKITWIRE' },
            { x: -17, y: -66, z: 10, name: 'WS', country: 'WALL STREET SYSTEMS' }
         ]
      },
      {
         name: 'Migrate',
         data: [
            { x: 25, y: -70, z: 10, name: 'CAL', country: 'STRH CALYPSO-CORE' },
            { x: 10, y: -45, z: 10, name: 'ST', country: 'SALES AND TRADING ACTIVITY REPOSITORY' }
         ]
      }
      ]
   };

   HC_exporting(Highcharts);

   setTimeout(() => {
      window.dispatchEvent(
         new Event('resize')
      );
   }, 300);
  }

}
