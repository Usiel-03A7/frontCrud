import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = 'http://localhost:5240/api/vehicles'; // URL de la API de vehículos
  private brandsUrl = 'http://localhost:5240/api/brands'; // URL de la API de marcas
  private imageUrl = 'http://localhost:5240/api/image'; // URL de la API de marcas

  constructor(private http: HttpClient) {}

  // Obtener las marcas de vehículos
  getBrands(): Observable<{ $values: { id: number; name: string }[] }> {
    return this.http.get<{ $values: { id: number; name: string }[] }>(this.brandsUrl);
  }

  // Obtener todos los vehículos
  getVehicles(): Observable<{ $values: Vehicle[] }> {
    return this.http.get<{ $values: Vehicle[] }>(this.apiUrl);
  }

  // Agregar un vehículo
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  // Eliminar un vehículo
  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
