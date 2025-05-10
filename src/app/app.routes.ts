import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LpProfesionalComponent } from './components/lp-profesional/lp-profesional.component';
import { LpConvencionalComponent } from './components/lp-convencional/lp-convencional.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'LpProfesional', component: LpProfesionalComponent },
    { path: 'LpConvencional', component: LpConvencionalComponent },
];
