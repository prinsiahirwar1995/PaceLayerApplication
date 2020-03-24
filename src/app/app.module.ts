import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigAppComponent } from './config-app/config-app.component';
import { ConfigTopAppComponent } from './config-top-app/config-top-app.component';
import { MenusComponent } from './menus/menus.component';
import { MapBusinessProcessApplicationComponent } from './map-business-process-application/map-business-process-application.component';
import {DropdownModule} from 'primeng/dropdown';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardService } from './dashboard.service';
import {Observable} from 'rxjs';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
import { TimeplotComponent } from './timeplot/timeplot.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { EditProcessComponent } from './edit-process/edit-process.component';
=======
import { HttpModule } from '@angular/http';
>>>>>>> 0de0cf985c662522730bfeb08eb0a3677d264b00

@NgModule({
  declarations: [
    AppComponent,
    ConfigAppComponent,
    ConfigTopAppComponent,
    MenusComponent,
    MapBusinessProcessApplicationComponent,routingComponents, PaceLayerChartComponent, TimeplotComponent, EditProcessComponent ],
  imports: [
    BrowserModule,
    DropdownModule,// dropdown support
    HttpClientModule,HttpModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule
    //CommonModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }


