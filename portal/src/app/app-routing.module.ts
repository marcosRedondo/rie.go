import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:"summary", loadChildren: () => import('@riego/modules/summary/summary.module').then(m => m.SummaryModule )},
  { path:"detail", loadChildren: () => import('@riego/modules/detail/detail.module').then(m => m.DetailModule )},
  { path:"measure", loadChildren: () => import('@riego/modules/measure/measure.module').then(m => m.MeasureModule )},
  { path: '', redirectTo: '/measure', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
