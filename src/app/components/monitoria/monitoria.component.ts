import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoria',
  templateUrl: './monitoria.component.html',
  styleUrls: ['./monitoria.component.css']
})
export class MonitoriaComponent {
 
  
  msg:string = '';

  Monitoria = [
    { NumeMonitoria: '1', name:'cristian',Fechainicio: '20-12-2020', Fechafinal:'16-12-2020',cantidad:'10'},
    { NumeMonitoria: '2', name:'braxton', Fechainicio: '20-11-2020', Fechafinal:'16-12-2020',cantidad:'15'},
    { NumeMonitoria: '3', name:'pepito', Fechainicio: '20-11-2020', Fechafinal:'16-12-2020',cantidad:'20'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addMonitoria():void{
    this.Monitoria.push(this.model);
    this.msg = 'campo agregado';
  }

  deleteMonitoria(i):void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if(answer) {
      this.Monitoria.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editMonitoria(i):void {
    this.hideUpdate = false;
    this.model2.NumeMonitoria = this.Monitoria[i].NumeMonitoria;
    this.model2.name = this.Monitoria[i].name;
    this.model2.Fechainicio = this.Monitoria[i].Fechainicio;
    this.model2.Fechafinal = this.Monitoria[i].Fechafinal;
    this.model2.cantidad = this.Monitoria[i].cantidad;
    this.myValue = i;
  }

  updateMonitoria():void {
    let i = this.myValue;
    for(let j = 0; j < this.Monitoria.length; j++){
      if(i == j) {
        this.Monitoria[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
