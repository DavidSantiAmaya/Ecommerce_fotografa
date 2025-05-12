import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvencionalListComponent } from './components/convencional-list/convencional-list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'LpProfesional', component: ProductListComponent },
    { path: 'LpConvencional', component: ConvencionalListComponent},
    { path: 'About', component: AboutComponent },
];
