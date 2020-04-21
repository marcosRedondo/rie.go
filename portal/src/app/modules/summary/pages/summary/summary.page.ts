import { Component, OnInit } from '@angular/core';

//models
import { MeasureTypeModel } from '@riego/shared/models/measure-type.model';
//Services
import {MeasureService} from '@riego/shared/services/measure.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss']
})
export class SummaryPage implements OnInit {

  public measures: Array<any> = [];
  public measureTypes: Array<MeasureTypeModel> = [];

  constructor(private measureService: MeasureService) { }

  ngOnInit(): void {
    this.getLastMeasures();
  }

  getMeasureTypes(){
    this.measureTypes = this.measureService.getTypes();
  }


  getLastMeasures(){
      this.measures.push(
        {type:"temperature", title:"Temperatura Ambiente", date:"18/04/2020 14:05", value:"35ºC"},
        {type:"humidity", title:"Humedad Ambiente", date:"18/04/2020 14:05", value:"20%"},
        {type:"soilmeasure", title:"Humedad Suelo", date:"18/04/2020 14:05", value:"60%"},
        {type:"brightness", title:"Claridad", date:"18/04/2020 14:05", value:"60%"},
      )

  }

}
