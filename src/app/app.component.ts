import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,Event } from '@angular/router'
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerevent: Event) => {
      if (routerevent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerevent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }



}
