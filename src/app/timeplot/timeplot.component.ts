import {clsSeries} from '../clsSeries';
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
  objSeries: clsSeries[];
  objArr=[];
  objAny:any;
 chart1:any;
// constructor (private httpService: HttpClient) { }

//bigChart = []; 
  
constructor(private dashboardService: DashboardService) { }

ngOnInit() {
   //Highcharts.chart('container', this.options);
  //this.objSeries = this.dashboardService.getBooksWithObservable(); 
  const copy = []
  var objT = []
  var objI = []
  var objM = []
  var objE = []
  
  this.dashboardService.getBooksWithObservable().subscribe(res => {
   this.objSeries=res;
   
   // // before
   // for (let i = 0; i < res.length; i++) {
   //   copy.push(res[i])
   // }
res.forEach(element => {
   //console.log(element);
if(element.mode==1){
    objT.push(element);
} 
else if(element.mode==2){
    objE.push(element);
}
else if(element.mode==3){
    objI.push(element);
}
else if(element.mode==4){
    objE.push(element);
}
   
});
// console.log( objT.length)
// console.log( objE.length)
// console.log( objM.length)
// console.log( objI.length)

    this.LoadChart(objI,objT,objE,objM);
   
 });
 this.LoadChart(null,null,null,null);
  }
LoadChart(I,T,E,M){
   //console.log(this.objSeries);
      this.chartOptions = {
         chart: {
            //animation: true,
            //height: 400,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'bubble',
            zoomType: 'xy',
            redraw	:true
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
          series:
          
          [{
            name: 'Tolerate',
            data: T
         },
         {
            name: 'Invest',
            data: I
      },
         {
            name: 'Eliminate',
            data: E
         },
         {
            name: 'Migrate',
            data: M
         }
         ]
      }; 
      HC_exporting(Highcharts);

      setTimeout(() => {
         window.dispatchEvent(
            new Event('resize')
         );
      }, 300);
  // console.log('end');
  
}
  isBigEnough(element, index, array) { 
   // console.log(element);
   // console.log("i"+index);
   // console.log(array);
   return (element ==1); 
} 
}
