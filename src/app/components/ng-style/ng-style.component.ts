import { Component, OnInit } from '@angular/core';

@Component({
  // cuando ocupo declarar un nombre de variable con guion utilizo camel case
  // por que no se pueden usar guiones
  selector: 'app-ng-style',
  template: `
  <p [style.fontSize.px]="tamano">
    this is a labels
  </p>
  <button class="btn btn-primary" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  tamano: number = 20;
  constructor() { }

  ngOnInit() {
  }

}
