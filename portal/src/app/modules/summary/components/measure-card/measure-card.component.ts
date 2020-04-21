import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'measure-card',
  templateUrl: './measure-card.component.html',
  styleUrls: ['./measure-card.component.scss']
})
export class MeasureCardComponent implements OnInit {

  @Input()
  measure: any;

  constructor() { }

  ngOnInit(): void {
  }

}
