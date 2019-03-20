import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readonly type ='age';
  operation: DashboardComponent.Operation;
  age: any;
  meta: any;
}

export namespace DashboardComponent {
  export enum Operation {EQ, NEQ, GT, LT, GTE, LTE}
}
