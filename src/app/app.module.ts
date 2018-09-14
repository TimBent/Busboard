import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenricStopDetailComponent } from './genric-stop-detail/genric-stop-detail.component';
import { BusStopsComponent } from './bus-stops/bus-stops.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GenricStopDetailComponent,
    BusStopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
