import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoria',
  templateUrl: './monitoria.component.html',
  styleUrls: ['./monitoria.component.css']
})
export class MonitoriaComponent {
 
  
  msg:string = '';

  Monitoria = [
    {'No.Monitoria': '1', position: 'manager', email:'email@email.com'},
    {'No.Monitoria': '2', position: 'Designer', email:'email@email.com'},
    {'No.Monitoria': '3', position: 'Programmer', email:'email@email.com'}
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
    this.model2.No.Monitoria = this.Monitoria[i]["No.Monitoria"];
    this.model2.position = this.Monitoria[i].position;
    this.model2.email = this.Monitoria[i].email;
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
