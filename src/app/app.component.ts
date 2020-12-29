import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { Data } from './data';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public datas: Data[];
  public data: object[];
  public pageSettings: PageSettingsModel;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getDatas();
    this.data = data;
    this.pageSettings = { pageSize: 5 };
  }

  getDatas(){
    this.http.get<any>('https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi').subscribe(
      response => {
        console.log(response);
        this.datas = response;
      }
    );
  }
}
