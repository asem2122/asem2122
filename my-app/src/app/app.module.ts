import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureBoxComponent } from './temperature-box/temperature-box.component';
import { HumidityBoxComponent } from './humidity-box/humidity-box.component';
import { TemperatureGraphComponent } from './temperature-graph/temperature-graph.component';
import { HumidityGraphComponent } from './humidity-graph/humidity-graph.component';
import {RouterModule, Routes} from "@angular/router";
import { MapComponent } from './map/map.component';

const meineRouten: Routes = [
  {
   path: 'map' , component: MapComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TemperatureBoxComponent,
    HumidityBoxComponent,
    TemperatureGraphComponent,
    HumidityGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(meineRouten)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
