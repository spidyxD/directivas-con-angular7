//el archivo de rutas es recomendable que este en el mismo lugar que el de modulo
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/user/user.component';
import {USER_ROUTES} from './components/user/usurio.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
     path: 'user/:id',
     component: UserComponent,
     children: USER_ROUTES
   },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
