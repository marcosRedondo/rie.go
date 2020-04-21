import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail-table-temperature',
  templateUrl: './table-temperature.component.html',
  styleUrls: ['./table-temperature.component.scss']
})
export class TableTemperatureComponent implements OnInit {

  @Input()
  public measures: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
