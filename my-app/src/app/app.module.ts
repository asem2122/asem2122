import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TemperatureBoxComponent } from './temperature-box/temperature-box.component';
import { HumidityBoxComponent } from './humidity-box/humidity-box.component';
import { TemperatureGraphComponent } from './temperature-graph/temperature-graph.component';
import { HumidityGraphComponent } from './humidity-graph/humidity-graph.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
