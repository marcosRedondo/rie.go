import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  public timeNow : String = "";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.timeNow = moment().format("DD/MM/YYYY HH:mm:ss");
    },1000)
  }

}
