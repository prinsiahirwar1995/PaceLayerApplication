import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigAppComponent} from './config-app/config-app.component';
import {ConfigTopAppComponent} from './config-top-app/config-top-app.component';
import {MapBusinessProcessApplicationComponent} from './map-business-process-application/map-business-process-application.component';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
const routes: Routes = [
    { path: 'configapp', component: ConfigAppComponent},
    { path: 'configtopapp', component: ConfigTopAppComponent},
    {path: 'mapbusinessprocessapplication', component: MapBusinessProcessApplicationComponent},
    {path:'paceLayerchart',component:PaceLayerChartComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

  })

  export class AppRoutingModule { }
  export const routingComponents = [ConfigAppComponent,ConfigTopAppComponent,MapBusinessProcessApplicationComponent,PaceLayerChartComponent]