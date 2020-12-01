import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public  HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.HttpClient.get('http://127.0.0.1:8000/About/').subscribe((res) =>{
      console.log(res);
    });
    console.log('ingreso.1!');
    
  }

}
