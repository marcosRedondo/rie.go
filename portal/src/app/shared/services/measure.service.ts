import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {environment} from '@riego/env';
//Models
import { MeasureTypeModel } from '@riego/shared/models/measure-type.model';
import { MeasureModel } from '@riego/shared/models/measure.model';

const urlSrv = environment.baseUrl + "measure";
@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  constructor(private http : HttpClient) { }

  get(){
    return this.http.get<MeasureModel[]>(urlSrv);
  }

  save(m: MeasureModel){
    return this.http.put(urlSrv, m);
  }

  delete (m: MeasureModel){
    return this.http.delete(urlSrv+"/"+m.id);
  }


  /************/
 /** BORRAR **/
/************/
  getTypes(){
    let types: Array<MeasureTypeModel> = []
    types.push(
      { id:1, name:"Temperatura Ambiente",  units:"ºC" },
      { id:2, name:"Humedad Ambiente",      units:"%"  },  
      { id:3, name:"Humedad Suelo",         units:"%"  },   
      { id:4, name:"Luminosidad",           units:"%"  },
      { id:5, name:"Riego",                 units:"MIN"},
      { id:6, name:"Arranque App",          units:"UP" }
    );
    return types;    
  }

  getByTypeAndDate(_type: MeasureTypeModel, _date: String){
    let measure: Array<MeasureModel> = [];
      measure.push(
      {id:1, date:_date + "01",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:2, date:_date + "02",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:3, date:_date + "03",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:4, date:_date + "04",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:5, date:_date + "05",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:6, date:_date + "06",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:7, date:_date + "07",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:8, date:_date + "08",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:9, date:_date + "09",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:10, date:_date + "10",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:11, date:_date + "11",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:12, date:_date + "12",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:13, date:_date + "13",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:14, date:_date + "14",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:15, date:_date + "15",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:16, date:_date + "16",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:17, date:_date + "17",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:18, date:_date + "18",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:19, date:_date + "19",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:20, date:_date + "20",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:21, date:_date + "21",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:22, date:_date + "22",author:"arduino", sensor:"arduino", value:"30", type:_type},
      {id:23, date:_date + "23",author:"arduino", sensor:"arduino", value:"30", type:_type}
    )
    return measure;

  }
}
