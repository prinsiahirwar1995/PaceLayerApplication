import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-map-business-process-application',
  templateUrl: './map-business-process-application.component.html',
  styleUrls: ['./map-business-process-application.component.css']
})
export class MapBusinessProcessApplicationComponent implements OnInit {
  title = 'PaceLayerUI';
  constructor (private httpService: HttpClient) { }
    // list: string[] = ["aa", "sss", "fdgfd"];
    arrBirds;
   mapBPDrp : {key:string, value:string}[] =[{key:"0",value:"value1"},{key:"1",value:"value2"}] ;
  ngOnInit () {

    
     this.httpService.get('http://pacewebapiv1.azurewebsites.net/masterapi/portfolios')
     .subscribe(
       data => {
         this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
           console.log(this.arrBirds[1]);
       },
       (err: HttpErrorResponse) => {
         console.log (err.message);
       }
     );
  }

}
