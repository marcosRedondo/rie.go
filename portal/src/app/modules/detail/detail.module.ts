import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailPage } from './pages/detail/detail.page';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { TableTemperatureComponent } from './components/table-temperature/table-temperature.component';
import { ChartTemeratureComponent } from './components/chart-temerature/chart-temerature.component';


@NgModule({
  declarations: [DetailPage, DetailCardComponent, TableTemperatureComponent, ChartTemeratureComponent],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
