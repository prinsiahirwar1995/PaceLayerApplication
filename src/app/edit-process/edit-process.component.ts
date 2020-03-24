import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
@Component({
  selector: 'app-edit-process',
  templateUrl: './edit-process.component.html',
  styleUrls: ['./edit-process.component.css']
})
export class EditProcessComponent implements OnInit {
  editForm: FormGroup;
  sPath: string;
  constructor(private formBuilder: FormBuilder, private httpService: HttpClient,private router: Router) { 

    this.sPath = "http://pacelayerapi.azurewebsites.net/masterApi/";
  }
  
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
  
  }
  onSubmit() {
   
  }

}
