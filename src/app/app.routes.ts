// app.routes.ts
import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { BrandListComponent } from './components/brand-list.component/brand-list.component.component'; //components/brand-list/brand-list.component

export const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' }, // Ruta raíz redirige a /vehicles
  { path: 'vehicles', component: VehicleListComponent }, // Lista de vehículos
  { path: 'vehicles/create', component: VehicleFormComponent }, // Crear vehículo
  { path: 'vehicles/:id', component: VehicleDetailComponent }, // Detalle de vehículo
  { path: 'vehicles/:id/edit', component: VehicleFormComponent }, // Editar vehículo
  { path: 'brands', component: BrandListComponent }, // Lista de marcas
];
