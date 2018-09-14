import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusStopsComponent } from './bus-stops/bus-stops.component';
import { GenricStopDetailComponent } from './genric-stop-detail/genric-stop-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/bus-stops', pathMatch: 'full' },
  { path: 'bus-stops', component: BusStopsComponent },
  { path: 'bus-stop/:id', component: GenricStopDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
