import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// elementref es para modificar un elemento en el html
// HostListener escucha los eventos del mouseEntro
// input recibe parametros del html
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
      // tslint:disable-next-line:quotemark
      console.log("Call directive");
  }

  // tslint:disable-next-line:quotemark
  @Input("appResaltado") newColor: string;
  @HostListener('mouseenter') mouseEntro() {
      this.resaltar(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
      this.resaltar(null);
  }
  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
