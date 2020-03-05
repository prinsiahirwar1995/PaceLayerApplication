import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pace-layer-chart',
  templateUrl: './pace-layer-chart.component.html',
  styleUrls: ['./pace-layer-chart.component.css']
})
@Injectable()
export class PaceLayerChartComponent implements OnInit {

  
chartdata : any[];


  constructor (private httpService: HttpClient) { }
a:string;
  ngOnInit() {

    this.httpService.get("https://pacelayerapplicationapi.azurewebsites.net/masterapi/ApplLayerState")
    .subscribe(
      portfoliodata => {
        
        this.chartdata = portfoliodata[1];//fill data from api to mapdata
        
        
    });
    

    /*function copyClipboard() {
      var elm = document.getElementById("divClipboard");
      // for Internet Explorer
    
      if(document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(elm);
        range.select();
        document.execCommand("Copy");
        alert("Copied div content to clipboard");
      }
      else if(window.getSelection) {
        // other browsers
    
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(elm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
        alert("Copied div content to clipboard");
      }
    }*/
   
  }

}
