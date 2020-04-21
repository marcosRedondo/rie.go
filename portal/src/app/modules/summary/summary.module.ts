import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPage } from './pages/summary/summary.page';
import { MeasureCardComponent } from './components/measure-card/measure-card.component';


@NgModule({
  declarations: [SummaryPage, MeasureCardComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
