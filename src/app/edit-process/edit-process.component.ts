import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
@Component({
  selector: 'app-edit-process',
  templateUrl: './edit-process.component.html',
  styleUrls: ['./edit-process.component.css']
})
export class EditProcessComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  sPath: string;
  
  mapData: any;//[];

  BPData: any;//[];

  ApplicationData: any[];

  SupportLevel: any[];
  Dataforgrid: any[];

  Tabledata: any[];
  constructor(private fb: FormBuilder, private httpService: HttpClient,private router: Router) { 

    this.sPath = "http://pacelayerapi.azurewebsites.net/masterApi/";
  }
  Onchangedropdown(val) {


    //alert(val);
    return this.httpService.get(this.sPath + "applications/" + val).subscribe(application => {

      this.httpService.get(this.sPath + "getApplBProcess/get/" + val)
        .subscribe(dg => {

          this.ApplicationData = application[0];//fill data from api to mapdata   

          this.Tabledata = dg[1];



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
   // this.submitted = true;
    // stop here if form is invalid
    //if (this.form.invalid) {
    //  return;
   // }

    let headers = new HttpHeaders();
    headers = new HttpHeaders(
      {

        'Content-Type': 'application/json',

      });
    var data = {

      "PortfolioID": this.form.value.PortfolioID, "ApplicationID": this.form.value.ApplicationID

      , "BprocessID": this.form.value.BPID, "SupportOptionID": this.form.value.SupportLevelID
    };
    
    console.log(data)

    return this.httpService.post("http://pacelayerapi.azurewebsites.net/masterApi/EditPort/", data, { headers: headers }).subscribe(

      data => {

        console.log("Update Request is successful ", data);

      },

      error => {

        console.log("Error", error);

      }

    );
  }
  Cancel(){
    this.router.navigate(['/mapbusinessprocessapplication']).then(success => console.log('navigation success?',success))
    .catch(console.error);
  }
}
