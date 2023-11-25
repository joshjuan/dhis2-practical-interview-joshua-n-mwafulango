import {RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';

export  const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  // Other routes...
];

//export const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

