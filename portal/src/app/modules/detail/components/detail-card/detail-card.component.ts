import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

//models
import { MeasureTypeModel } from '@riego/shared/models/measure-type.model';
import { MeasureModel } from '@riego/shared/models/measure.model';

//Services
import { MeasureService } from '@riego/shared/services/measure.service';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {

  public date: String;
  public view: String;
  public measures: Array<MeasureModel>;
  public expand : Boolean;

  @Input()
  public type: MeasureTypeModel; 

  

  constructor(private measureService : MeasureService) { 
    this.measures = [];
    this.view ="table";
    this.expand = true;
  }

  ngOnInit(): void {
    this.date = moment().format("DD/MM/YYYY");
    this.loadMeasures();
  }

  changeView( _view: String){
    this.view = _view;
  }

  loadMeasures(){
    this.measures = this.measureService.getByTypeAndDate(this.type,"00:")
  }

}
