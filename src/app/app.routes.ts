import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: '404', component: NotFoundComponent, title: 'Page Not Found' },
      { path: '**', redirectTo: '/404' }

];
