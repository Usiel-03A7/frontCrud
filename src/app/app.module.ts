// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar FormsModule y ReactiveFormsModule
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/NavigationComponent/navigation.component'; // Importar NavigationComponent
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { BrandListComponent } from './components/brand-list.component/brand-list.component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent, // Declarar NavigationComponent
    VehicleListComponent,
    VehicleFormComponent,
    VehicleDetailComponent,
    BrandListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
