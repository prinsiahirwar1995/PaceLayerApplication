import { Component, OnInit,Injectable, ElementRef,ViewChild } from '@angular/core';

import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import html2canvas from 'html2canvas';

import * as jspdf from 'jspdf';





@Component({

  selector: 'app-pace-layer-chart',

  templateUrl: './pace-layer-chart.component.html',

  styleUrls: ['./pace-layer-chart.component.css']

})

@Injectable()



export class PaceLayerChartComponent implements OnInit {



  

  @ViewChild('screen') screen: ElementRef;

  @ViewChild('canvas') canvas: ElementRef;

  @ViewChild('downloadLink') downloadLink: ElementRef;

  @ViewChild('takingfordata') takingfordata:ElementRef;

  downloadImage(){

    html2canvas(document.body,{allowTaint : true}).then(canvas => {

      

      //this.takingfordata.nativeElement.style.transform="rotateX(-10deg) translateZ(80px)";

      this.canvas.nativeElement.src = canvas.toDataURL();

      this.downloadLink.nativeElement.download = 'PaceLayer-diagram.png';

      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');

      this.downloadLink.nativeElement.target = '_blank';

      this.downloadLink.nativeElement.click();

  

    });

  }

chartdata : any[];





  constructor (private httpService: HttpClient) { }

  

  ngOnInit() {




    this.httpService.get("https://pacelayerapi.azurewebsites.net/masterApi/ApplLayerState")


    .subscribe(

      portfoliodata => {

        

        this.chartdata = portfoliodata[1];//fill data from api to mapdata

        

        

    });

    

   

  }



}