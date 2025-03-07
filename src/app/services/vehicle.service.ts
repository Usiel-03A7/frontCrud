// vehicle.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // Importar HttpParams
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = 'http://localhost:5240/api/vehicles'; // URL de la API de vehículos
  private brandsUrl = 'http://localhost:5240/api/brands'; // URL de la API de marcas

  constructor(private http: HttpClient) {}

  // Obtener vehículos con paginación y filtros
  getVehicles(page: number, pageSize: number, term: string, year: string): Observable<{ data: Vehicle[]; totalItems: number }> {
    const params = new HttpParams() // Usar HttpParams
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())
      .set('term', term)
      .set('year', year);

    return this.http.get<{ data: Vehicle[]; totalItems: number }>(this.apiUrl, { params });
  }

  // Obtener un vehículo por su ID
  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  // Agregar un vehículo
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  // Eliminar un vehículo
  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener la lista de marcas
  getBrands(): Observable<{ id: number; name: string }[]> {
    return this.http.get<{ id: number; name: string }[]>(this.brandsUrl);
  }
}
