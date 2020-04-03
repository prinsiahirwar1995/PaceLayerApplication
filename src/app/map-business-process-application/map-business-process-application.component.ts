import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';



import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Router } from '@angular/router';

import { concat } from 'rxjs';

import { analyzeAndValidateNgModules } from '@angular/compiler';





@Component({



  selector: 'app-map-business-process-application',



  templateUrl: './map-business-process-application.component.html',



  styleUrls: ['./map-business-process-application.component.css']



})



@Injectable()



export class MapBusinessProcessApplicationComponent implements OnInit {



  title = 'PaceLayerUI';

  form: FormGroup;

  submitted = false;

  selectedApplication: number;

  isShow = false;

  Showlbl = true;

  showUpdatebtn = false;

  Editbtn = true;

  mapData: any;//[];



  BPData: any;//[];



  ApplicationData: any[];



  SupportLevel: any[];
  DataforDdlgrid: any[];
  Tabledata: any[];
  sPath: string;
  supid: any;
  id: any;


  constructor(public fb: FormBuilder, private httpService: HttpClient, private router: Router) {

    this.sPath = "https://pacelayerapi.azurewebsites.net/masterApi/";
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

  OnchangeAppdropdown(val1) {

    console.log(val1);

  }

  ngOnInit() {

    this.form = this.fb.group({

      PortfolioID: new FormControl('', Validators.required),

      ApplicationID: new FormControl('', Validators.required),

      BPID: new FormControl('', Validators.required),

      SupportLevelID: new FormControl('', Validators.required)

    })

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

  posts: any;
  deleteposts: any;
  mapbusForm = this.fb.group({

    PortfolioID: [''],
    ApplicationID: [''],
    BPID: [''],
    SupportLevelID: ['']
  })
  // convenience getter for easy access to form fields

  get f() { return this.form.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;

    }
    let headers = new HttpHeaders();
    headers = new HttpHeaders(

      {

        'Content-Type': 'application/json',
      });

    var data = {

      "PortfolioID": this.form.value.PortfolioID, "ApplicationID": this.form.value.ApplicationID
      , "BprocessID": this.form.value.BPID, "SupportOptionID": this.form.value.SupportLevelID


    };
    return this.httpService.post(this.sPath + "addport/", data, { headers: headers }).subscribe(data => {
      this.posts = data;
      if (this.posts.status === 'succes') {

        alert('Record added successfully.');

      }

      this.Onchangedropdown(this.form.value.PortfolioID);

      // show data in console

    }, (error: Response) => {

      if (error.status === 424)

        alert('This Process is Already Added!!!');

      else

        alert('An Unhandled Error');

      console.log(error);

    });

  }

  //for deletion

  selected: any;

  deletedata: any;

  DeleteToDo(selected) {

    if (window.confirm('Are you sure want to delete this record ?')) {

      let headers = new HttpHeaders();

      headers = new HttpHeaders(

        {

          'Content-Type': 'application/json',

        });
      var data = {

        "PortfolioID": this.Tabledata[selected].ProcID, "ApplicationID": this.Tabledata[selected].AppID
        , "BprocessID": this.Tabledata[selected].ProcID, "SupportOptionID": this.Tabledata[selected].SuppOptionID

      };

      return this.httpService.post(this.sPath + "DelPort/", data, { headers: headers }).subscribe(data => {

        this.httpService.get(this.sPath + "getApplBProcess/all/0").subscribe(tabledata => {
          this.deletedata = data;


          if (this.deletedata.status === 'succes') {

            alert('Record deleted successfully.')


          }

          this.Tabledata = tabledata[1];

        })

      },
        error => {

          console.log("Error", error);
        });

    }

  }

  OnUpdateSupport(supid) {

    this.id = supid - 1;

  }

  updatedata: any;

  UpdateSupportLevel(event) {

    if (this.id == undefined) {
      var data = {

        "PortfolioID": this.Tabledata[event].ProcID, "ApplicationID": this.Tabledata[event].AppID
        , "BprocessID": this.Tabledata[event].ProcID, "SupportOptionID": this.Tabledata[event].SuppOptionID

      };

    }

    else {

      var data = {

        "PortfolioID": this.Tabledata[event].ProcID, "ApplicationID": this.Tabledata[event].AppID
        , "BprocessID": this.Tabledata[event].ProcID, "SupportOptionID": this.SupportLevel[this.id].ID

      };

    }


    let headers = new HttpHeaders();

    headers = new HttpHeaders(

      {
        'Content-Type': 'application/json',

      });

    return this.httpService.post(this.sPath + "EditPort/", data, { headers: headers }).subscribe(update => {
      this.httpService.get(this.sPath + "getApplBProcess/all/0").subscribe(tabledata => {

        this.updatedata = update



        this.OnchangeAppdropdown(this.Tabledata[event].ProcID);



        if (this.updatedata.status === 'succes') {

          alert('Record updated successfully.')

        }
        this.Tabledata = tabledata[1];
      })

      },
      error => {
        console.log("Error", error);
    //this.router.navigate(['/EditProcess']).then(success => console.log('navigation success?', success))
    //.catch(console.error);
      }
    );

    
  
  }
EditToDo() {

  this.isShow = !this.isShow;

    this.Showlbl = false;

    this.showUpdatebtn = true;

    this.Editbtn = false;

  }

  cancel(){
    this.httpService.get(this.sPath + "getApplBProcess/all/0").subscribe(tabledata => {
      this.Tabledata = tabledata[1];
      });
  }

}