import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    .subscribe((res: any) => {
      this.data = res.data
      this.dtTrigger.next();
    });
   
  }

  ngOnDestroy(): void {
   
     this.dtTrigger.unsubscribe();
  }

}
