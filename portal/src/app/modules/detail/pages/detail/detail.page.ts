import { Component, OnInit } from '@angular/core';

//Models
import { MeasureTypeModel } from '@riego/shared/models/measure-type.model';

// Services
import { MeasureService } from '@riego/shared/services/measure.service';

@Component({
  selector: 'detail-page',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {

  public measureTypes: Array<MeasureTypeModel>;
  constructor(private measureService: MeasureService) { 
    this.measureTypes = [];
  }

  getMeasureTypes(){
    this.measureTypes = this.measureService.getTypes();
  }

  ngOnInit(): void {
    this.getMeasureTypes();
  }

}
