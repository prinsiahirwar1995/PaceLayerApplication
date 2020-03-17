import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';

import { FormGroup, FormBuilder } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { viewClassName } from '@angular/compiler';

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

  Dataforgrid: any[];

  Tabledata: any[];
  sPath: string;

  constructor(public fb: FormBuilder, private httpService: HttpClient) {

    this.sPath = "http://pacelayerapi.azurewebsites.net/masterApi/";

  }

  @ViewChild('tableforddl') tableforddl: ElementRef;
  @ViewChild('tablewithoutddl') tablewithoutddl: ElementRef;
  @ViewChild('lblMessage') lblMessage: ElementRef;
  Onchangedropdown(val) {

    //alert(val);
    return this.httpService.get(this.sPath + "applications/" + val).subscribe(application => {

      this.httpService.get(this.sPath + "getApplBProcess/get/" + val)
        .subscribe(dg => {

          this.ApplicationData = application[0];//fill data from api to mapdata   

          this.Tabledata = dg[1];

          this.tableforddl.nativeElement.style.display = 'table';
          this.tablewithoutddl.nativeElement.style.visibility = 'hidden';
        });

    });



  }

  ngOnInit() {

    this.httpService.get(this.sPath + "portfolios").subscribe(portfoliodata => {

      this.httpService.get(this.sPath + "BProcess").subscribe(bpdata => {

        this.httpService.get(this.sPath + "GetSupports").subscribe(supportlevel => {
          this.httpService.get(this.sPath + "getApplBProcess/all/0").subscribe(tabledata => {

            this.mapData = portfoliodata[0];//fill data from api to mapdata

            this.BPData = bpdata[0];//fill data from api to mapdata

            this.SupportLevel = supportlevel[0];//fill data from api to mapdata

            this.Tabledata = tabledata[1];

          });

        });

      });

    });
  }

  // convenience getter for easy access to form fields

  /*get f() { return this.MapBusinessProcessForm.controls; }
  
  */
  //
  posts: any;

  mapbusForm = this.fb.group({

    PortfolioID: [''],

    ApplicationID: [''],

    BPID: [''],

    SupportLevelID: ['']

  })



  onSubmit() {

    let headers = new HttpHeaders();
    headers = new HttpHeaders(
      {

        'Content-Type': 'application/json',

      });
    var data = {

      "PortfolioID": this.mapbusForm.value.PortfolioID, "ApplicationID": this.mapbusForm.value.ApplicationID

      , "BprocessID": this.mapbusForm.value.BPID, "SupportOptionID": this.mapbusForm.value.SupportLevelID
    };



    return this.httpService.post("http://pacelayerapi.azurewebsites.net/masterApi/addport/", data, { headers: headers }).subscribe(data => {


      this.posts = data;
      alert('Record added successfully.');
      this.Onchangedropdown(this.mapbusForm.value.PortfolioID);
      // show data in console
    }, (error: Response) => {
      if (error.status === 424)
        alert('This Post is Already Added');
      else
        alert('An Unhandled Error');
      console.log(error);
    });
  }




}