import { Component, OnInit, Injectable } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable, forkJoin} from 'rxjs';


@Component({
  selector: 'app-map-business-process-application',
  templateUrl: './map-business-process-application.component.html',
  styleUrls: ['./map-business-process-application.component.css']
})
@Injectable()
export class MapBusinessProcessApplicationComponent implements OnInit {
  title = 'PaceLayerUI';
  // oppoSuitsForm: FormGroup
  //submitted = false;private formBuilder: FormBuilder,
  selectedApplication: number;
  mapData: any;//[];
  BPData: any;//[];
  ApplicationData: any[];
 SupportLevel: any[];

  constructor ( public fb: FormBuilder,private httpService: HttpClient) { }

  Onchangedropdown(val){
    //alert(val);
    
   return this.httpService.get("http://pacelayerapplicationapi.azurewebsites.net/masterapi/applications/" + val)
    .subscribe(
      application => {
       this.ApplicationData = application[0];//fill data from api to mapdata   
    });
  }
  
   ngOnInit () {
   
    this.httpService.get("http://pacelayerapplicationapi.azurewebsites.net/masterapi/portfolios")
      .subscribe(
        portfoliodata => {
         
          this.mapData = portfoliodata[0];//fill data from api to mapdata
         console.log(this.mapData);
         
          
      });

  //filling Business Process data
  this.httpService.get("http://pacelayerapplicationapi.azurewebsites.net/masterapi/BProcess")
  .subscribe(
    bpdata => {
      
      this.BPData = bpdata[0];//fill data from api to mapdata
      console.log(this.BPData);
  });

 //filling Support Level data
 this.httpService.get("http://pacelayerapplicationapi.azurewebsites.net/masterApi/GetSupports")
 .subscribe(
  supportlevel => {
     
     this.SupportLevel = supportlevel[0];//fill data from api to mapdata
     console.log(this.SupportLevel)
     
 });
}
// convenience getter for easy access to form fields
/*get f() { return this.MapBusinessProcessForm.controls; }
*/
posts: any;
mapbusForm = this.fb.group({
  PortfolioID: [''],
  ApplicationID:[''],
  BPID:[''],
  SupportLevelID:['']
})

onSubmit() {
    let headers = new HttpHeaders();

headers = new HttpHeaders(
  {
    'Content-Type': 'application/json',
  });
  
var data = {"portfolioID": this.mapbusForm.value.PortfolioID,"applicationID": this.mapbusForm.value.ApplicationID

,"BprocessID":this.mapbusForm.value.BPID, "SupportOptionID":this.mapbusForm.value.SupportLevelID
};
 console.log(data);
console.log(headers)

  return this.httpService.post("http://localhost:3000/masterapi/addport/"
 ,{params: data},{ headers: headers}).subscribe(data => {
  //alert("OK");
    this.posts = data;
   // show data in console
   console.log(data);
   });
   
 }
}

