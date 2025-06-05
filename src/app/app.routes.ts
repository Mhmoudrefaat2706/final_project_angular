import { Routes } from '@angular/router';

import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialsDetailsComponent } from './components/materials-details/materials-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'logout', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'materials', component: MaterialsComponent, title: 'Materials' },
      { path: 'materials/:id', component: MaterialsDetailsComponent, title: 'Material Details' },
      { path: 'profile', component: ProfileComponent, title: 'profile' },

      { path: '404', component: NotFoundComponent, title: 'Page Not Found' },
      { path: '**', redirectTo: '/404' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
export const AppRoutingProviders = importProvidersFrom(AppRoutingModule);




