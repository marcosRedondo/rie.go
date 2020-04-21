import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeasureComponent} from '@riego/modules/measure/pages/measure/measure.component';


const routes: Routes = [
  { path:"", component:MeasureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasureRoutingModule { }
