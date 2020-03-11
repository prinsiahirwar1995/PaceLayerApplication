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

sPath:string  ;

  constructor ( public fb: FormBuilder,private httpService: HttpClient) { 

    this.sPath="http://localhost:3000/masterApi/";

  }



  Onchangedropdown(val){

    //alert(val);

    

   return this.httpService.get(this.sPath+"applications/" + val).subscribe(application => {

       this.ApplicationData = application[0];//fill data from api to mapdata   

    });

  }

  

   ngOnInit () {

   

    this.httpService.get(this.sPath+"portfolios").subscribe(portfoliodata => {

      this.httpService.get(this.sPath+"BProcess").subscribe(bpdata => {

        this.httpService.get(this.sPath+"GetSupports").subscribe(supportlevel => {

          this.mapData = portfoliodata[0];//fill data from api to mapdata

          this.BPData = bpdata[0];//fill data from api to mapdata

          this.SupportLevel = supportlevel[0];//fill data from api to mapdata

      });

   });

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

var data = {

  "PortfolioID": this.mapbusForm.value.PortfolioID,"ApplicationID": this.mapbusForm.value.ApplicationID

 ,"BprocessID":this.mapbusForm.value.BPID, "SupportOptionID":this.mapbusForm.value.SupportLevelID};

 
console.log(data)
  return this.httpService.post("http://pacelayerapi.azurewebsites.net/masterApi/addport/", data,{ headers: headers}).subscribe(data => {
   

  this.posts = data;

   // show data in console

   console.log(data);

   });

   

 }

}