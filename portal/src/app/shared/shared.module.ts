import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RouterModule} from '@angular/router';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';



@NgModule({
  declarations: [TopBarComponent, BottomBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopBarComponent, 
    BottomBarComponent
  ]
})
export class SharedModule { }
