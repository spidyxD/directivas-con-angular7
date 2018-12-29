import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: `
    <p>
      user-new works!
    </p>
  `,
  styles: []
})
export class UserNewComponent implements OnInit {
  // herencia de parametros de rutas padre a hijas
  //con la propiedad parent
  constructor(private router:ActivatedRoute) {
      this.router.parent.params.subscribe(params => {
        console.log("Ruta Hija");
        console.log(params);
      });
   }

  ngOnInit() {
  }

}
