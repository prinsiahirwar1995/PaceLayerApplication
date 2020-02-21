import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigAppComponent } from './config-app/config-app.component';
import { ConfigTopAppComponent } from './config-top-app/config-top-app.component';
import { MenusComponent } from './menus/menus.component';
import { MapBusinessProcessApplicationComponent } from './map-business-process-application/map-business-process-application.component';
import {DropdownModule} from 'primeng/dropdown';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    ConfigAppComponent,
    ConfigTopAppComponent,
    MenusComponent,
    MapBusinessProcessApplicationComponent,routingComponents, PaceLayerChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownModule,// dropdown support
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }


