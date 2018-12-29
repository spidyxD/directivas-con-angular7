import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
   <app-css></app-css>
     <br>
   <app-classes></app-classes>
     <br>
   <p [appResaltado]="'green'">
    hello world
  </p>
    <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy {
  constructor() {
    console.log("cosntructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(): void {
    console.log("ngOnChanges");
  }




}
