import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta raíz
  { path: 'vehicles', component: AppComponent }, // Ruta para el catálogo de vehículos
  { path: 'brands', component: AppComponent }, // Ruta para el catálogo de marcas
  { path: 'vehicles/create', component: AppComponent }, // Ruta para crear un vehículo
  { path: 'vehicles/:id', component: AppComponent }, // Ruta para ver el detalle de un vehículo
  { path: 'vehicles/:id/edit', component: AppComponent }, // Ruta para editar un vehículo
];
