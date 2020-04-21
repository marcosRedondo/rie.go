import { Component, OnInit } from '@angular/core';
import { MeasureService} from '@riego/shared/services/measure.service'
import { MeasureModel } from '@riego/shared/models/measure.model';


@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent implements OnInit {

  public measures: MeasureModel[];
  public newMeasure: any;

  constructor(private msrv: MeasureService) { 
    this.measures = [];
    this.newMeasure = {
      id:"",
      date:"",
      value:"",
      units:"",
      type:"",
      sensor:"",
      author:""
    }
    
  }

  ngOnInit(): void {
    this.getMeasures();
  }

  getMeasures(){
    this.msrv.get()
      .subscribe(
        data=>{
          this.measures = data;
        },error=>{
         alert("¡¡Error al obtener las medidas, mirar en la consola!!");
         console.log(error);
        }
      );
  }

  saveMeasure(m: MeasureModel){
    this.msrv.save(m)
      .subscribe(
        response=>{
          alert("Medida guardada");
          this.getMeasures();
        },error=>{
          alert("Error al salvar la medida, mirar en la consola");
          console.log(error);
        }
      );
    this.msrv.save(m);
  }

  removeMeasure(m: MeasureModel){
    this.msrv.delete(m)
      .subscribe(
        response =>{
          alert("Medida borrada");
          this.getMeasures();
        },error=>{
          alert("Error al borrar la medida, mirar en la consola");
          console.log(error);
        }
      );
  }

}
