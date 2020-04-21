import {MeasureTypeModel} from '@riego/shared/models/measure-type.model';

export class MeasureModel {
    id:     number;
    date:   String;
    value:  String;
    type:   MeasureTypeModel;
    author: String;
    sensor: String;
    
}
