import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MeasureRoutingModule } from './measure-routing.module';
import { MeasureComponent } from './pages/measure/measure.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MeasureComponent],
  imports: [
    CommonModule,
    MeasureRoutingModule,
    FormsModule,
    HttpClientModule 
  ]
})
export class MeasureModule { }
