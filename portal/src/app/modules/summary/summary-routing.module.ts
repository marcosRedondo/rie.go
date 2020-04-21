import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryPage } from './pages/summary/summary.page';


const routes: Routes = [
  { path:"", component:SummaryPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
